import { interval, Observable, tap } from "rxjs";
import { rxEval } from "./rxEval";

export type RxAxis = {
  id: number;
  name: string;
  start: number;
  end: number;
}


export enum RxEventType {
  SUBSCRIBE,
  NEXT,
  ERROR,
  COMPLETE,
  UNSUBSCRIBE,
  LOG,
  TIME,
};

export type RxEvent = {
  sid: number;
  ts: number;
  type: RxEventType;
  val?: any;
}

export type RxState = {
  ts: number;
  axes: RxAxis[];
  events: RxEvent[];
  logs: string[];
}

export type RxMonitorFunction = (name: string) => (o: Observable<any>) => Observable<any>;
export type RxLogFunction = (...arg: any[]) => void;
export type RxTargetFunction = (monitor: RxMonitorFunction, log: RxLogFunction) => Observable<any>;

export class RxExec {
  emptyState(): RxState {
    return {
      ts: 0,
      events: [],
      axes: [],
      logs: [],
    };
  }

  run(src: string): Observable<RxState> {
    return new Observable<RxState>(subscribe => {
      let unsubscribe: Function | null = null;

      const startTime = Date.now();
      let tsMax = 0;
      const state = {
        running: true,
        ts: 0,
        axes: [] as RxAxis[],
        events: [] as RxEvent[],
        logs: [] as string[],
      };

      const timestamp = () => Date.now() - startTime;
      const timestampAdjusted = (): number => {
        let ts = timestamp();
        if (ts <= tsMax) {
          ts = tsMax + 1;
        }
        return tsMax = ts;
      }

      const action = (timelineId: number, type: RxEventType, val?: any) => {
        const ts = state.ts = timestampAdjusted();
        switch (type) {
          case RxEventType.SUBSCRIBE:
            state.axes.push({ id: timelineId, start: ts, end: -1, name: val });
            break;
          case RxEventType.NEXT:
            state.events.push({ sid: timelineId, ts, type, val });
            break;
          case RxEventType.ERROR:
            // state.axes[timelineId].end = ts;
            state.events.push({ sid: timelineId, ts, type, val });
            break;
          case RxEventType.COMPLETE:
            // state.axes[timelineId].end = ts;
            state.events.push({ sid: timelineId, ts, type });
            break;
          case RxEventType.UNSUBSCRIBE:
            state.axes[timelineId].end = ts;
            state.events.push({ sid: timelineId, ts, type });
            break;
          case RxEventType.LOG:
            state.logs.push(`${ts} ms: ${val}`);
            break;
          case RxEventType.TIME:
            break;
        }

        subscribe.next({ ...state });

        // if (unsubscribe && state.axes.every(p => p.end !== -1)) {
        //   state.logs.push('FINISHED !!');
        //   console.log('FINISHED', timelineId, RxEventType[type]);
        //   subscribe.next({ ...state });
        //   unsubscribe();
        //   unsubscribe = null;
        // }
      };

      const timeline = (name: string) => (ob: Observable<any>) => new Observable<any>(subscribe => {
        const id = state.axes.length;
        const order = state.axes.filter(p => p.name.startsWith(`${name} #`)).length + 1;

        action(id, RxEventType.SUBSCRIBE, `${name} #${order}`);

        const subscription = ob.subscribe({
          next: (v: any) => {
            action(id, RxEventType.NEXT, v);
            subscribe.next(v);
          },
          error: (e: any) => {
            action(id, RxEventType.ERROR, e);
            subscribe.error(e);
          },
          complete: () => {
            action(id, RxEventType.COMPLETE);
            subscribe.complete();
          }
        });

        return () => {
          action(id, RxEventType.UNSUBSCRIBE);
          subscription.unsubscribe();
        }
      });

      const toStr = (v: any) => typeof v === 'object'
        ? JSON.stringify(v)
        : v;
      const console_ = (name: string) => {
        let resolve: any;
        const promise: any = new Promise((res: any) => {
          resolve = res;
        });
        promise.next = (v: any) => console_.log(`${name}: next =`, v);
        promise.error = (e: any) => {
          console_.error(`${name}: error =`, e);
          resolve();
        }
        promise.complete = () => {
          console_.log(`${name}: completed`);
          resolve();
        }

        return promise;
      };
      console_.log = (...args: any[]) => {
        console.log(...args);
        action(-1, RxEventType.LOG, args.map(p => toStr(p)).join(' '));
      };
      console_.error = (...args: any[]) => {
        console.error(...args);
        action(-1, RxEventType.LOG, args.map(p => toStr(p)).join(' '));
      };

      try {
        const maybeSubscription = rxEval(src, timeline, console_);

        const subscription = interval(10)
          .pipe(tap(() => action(-1, RxEventType.TIME)))
          .subscribe();

        if (maybeSubscription?.unsubscribe &&
          typeof maybeSubscription?.unsubscribe === 'function') {
          subscription.add(maybeSubscription);
        }

        unsubscribe = () => subscribe.unsubscribe();
        return subscription;
      } catch (e) {
        subscribe.error(e);
        return () => { };
      }
    });
  }
}
