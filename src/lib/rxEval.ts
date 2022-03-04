import * as rx from 'rxjs';
import * as ajax from 'rxjs/ajax';

const _eval = (code: string, {
  Observable, ConnectableObservable, observable, animationFrames,
  Subject, BehaviorSubject, ReplaySubject, AsyncSubject, asap, asapScheduler,
  async, asyncScheduler, queue, queueScheduler, animationFrame, animationFrameScheduler,
  VirtualTimeScheduler, VirtualAction, Scheduler, Subscription, Subscriber,
  Notification, NotificationKind, pipe, noop, identity, isObservable, lastValueFrom,
  firstValueFrom, ArgumentOutOfRangeError, EmptyError, NotFoundError,
  ObjectUnsubscribedError, SequenceError, TimeoutError, UnsubscriptionError,
  bindCallback, bindNodeCallback, combineLatest, concat, connectable, defer, empty,
  forkJoin, from, fromEvent, fromEventPattern, generate, iif, interval, merge,
  never, of, onErrorResumeNext, pairs, partition, race, range, throwError, timer,
  using, zip, scheduled, EMPTY, NEVER, config, audit, auditTime, buffer, bufferCount,
  bufferTime, bufferToggle, bufferWhen, catchError, combineAll, combineLatestAll,
  combineLatestWith, concatAll, concatMap, concatMapTo, concatWith, connect,
  count, debounce, debounceTime, defaultIfEmpty, delay, delayWhen,
  dematerialize, distinct, distinctUntilChanged, distinctUntilKeyChanged,
  elementAt, endWith, every, exhaust, exhaustAll, exhaustMap, expand, filter, finalize,
  find, findIndex, first, groupBy, ignoreElements, isEmpty, last, map, mapTo,
  materialize, max, mergeAll, flatMap, mergeMap, mergeMapTo, mergeScan, mergeWith,
  min, multicast, observeOn, pairwise, pluck, publish, publishBehavior, publishLast,
  publishReplay, raceWith, reduce, repeat, repeatWhen, retry, retryWhen, refCount,
  sample, sampleTime, scan, sequenceEqual, share, shareReplay, single, skip, skipLast,
  skipUntil, skipWhile, startWith, subscribeOn, switchAll, switchMap, switchMapTo,
  switchScan, take, takeLast, takeUntil, takeWhile, tap, throttle, throttleTime,
  throwIfEmpty, timeInterval, timeout, timeoutWith, timestamp, toArray, window,
  windowCount, windowTime, windowToggle, windowWhen, withLatestFrom, zipAll,
  zipWith,
  ajax, AjaxError, AjaxTimeoutError, AjaxResponse,
  rx, timeline, console
}: any) => {
  return eval(code);
};

export const rxEval = (code: string, timeline: any, console: any) => {
  const env = {
    ...rx,
    ...ajax,
    rx,
    timeline,
    console
  };

  return _eval(code, env);
};
