import { RxEventType, RxState } from "../lib/rxExec";
import { classNames, StyleProps } from "./types";

type RxInspectEventProps = {
  rxState: RxState;
  event: any;
} & StyleProps;

export function RxInspectEvent({ className, style, rxState, event }: RxInspectEventProps) {
  if (event === undefined)
    return <pre className={classNames(className, "inspect overflow-scroll bg-white")} style={style}>
    </pre>;

  return (
    <pre className={classNames(className, "inspect overflow-scroll bg-white")} style={style}>
      timeline   : {rxState.axes[event.sid].name}<br />
      timestamp  : {event.ts} ms<br />
      type       : {RxEventType[event.type]}<br />
      value      : {event?.val?.constructor?.name}<br />
      {JSON.stringify(event.val, null, 4)}
    </pre>
  );
}
