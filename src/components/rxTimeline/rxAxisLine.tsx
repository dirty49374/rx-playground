import { RxAxis } from "../../lib/rxExec";
import { RxContext, timelineConfig } from "./timeline";

type RxAxisLineProps = {
  axis: RxAxis,
  ctx: RxContext;
};

export function RxAxisLine({ axis, ctx }: RxAxisLineProps) {
  if (ctx.ts < axis.start) return <></>;

  const start = axis.start;
  const end = (axis.end !== -1 && axis.end < ctx.ts) ? axis.end : ctx.ts;

  return (
    <div
      className='bg-black inline-block absolute'
      style={{
        top: axis.id * timelineConfig.yscale + timelineConfig.offsetY,
        left: timelineConfig.offsetX + start * timelineConfig.xscale * ctx.scale,
        width: (end - start) * timelineConfig.xscale * ctx.scale,
        height: 0.2,
      }}
    ></div>
  );
}
