import { useEffect, useMemo, useRef } from "react";
import { RxState } from "../../lib/rxExec";
import { RxAxisLine } from "./rxAxisLine";
import { RxEventItem } from "./rxEventItem";
import { timelineConfig } from "./timeline";
import { classNames, StyleProps } from "../types";

type RxTimelineProps = {
  state: RxState;
  scale?: number;
  autoScroll?: boolean;
  setInspect?: (value: any) => void;
} & StyleProps;


export function RxTimeline({ className, style, state, scale = 1, setInspect, autoScroll }: RxTimelineProps) {
  const { axes, events, ts } = state;

  const ctx = useMemo(() => ({ ts, scale }), [ts, scale]);
  const height = state.axes.length * timelineConfig.yscale + 32;
  const width = state.ts * timelineConfig.xscale * ctx.scale;

  const handleClick = (e: any) => setInspect && setInspect(e);

  const ref = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (ref.current && autoScroll) {
      ref.current.scrollTo(ctx.ts * timelineConfig.xscale * ctx.scale + 200, ref.current.scrollTop);
    }
  }, [ctx.ts, ctx.scale, autoScroll]);

  return (
    <div className={classNames(className, 'overflow-y-scroll overflow-x-hidden flex flex-row bg-white')} style={style}>
      {/* left header */}
      {/* {left} */}

      <div className="w-32">
        <div className="pr-2 py-2 min-h-full bg-slate-400">
          {axes.map((axis, key) => <div key={key} className='text-right border-0 h-[20px]'>{axis.name}</div>)}
          {/* <MultipleLines lines={20} /> */}
        </div>
      </div>
      <div ref={ref} className="flex-1 min-h-full overflow-x-scroll overflow-y-hidden" style={{ height }}>
        <div className="relative">
          <div className="absolute" style={{ height, width: width + 100 }}></div>
          {events.map((e, i) => <RxEventItem key={i} event={e} ctx={ctx} onClick={() => handleClick(e)} />)}
          {axes.map((axis, key) => <RxAxisLine key={key} axis={axis} ctx={ctx} />)}
        </div>
      </div>
      {/* right timeline */}
      {/* {right} */}
    </div>

  );
}
