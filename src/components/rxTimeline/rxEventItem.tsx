import { timelineConfig, RxContext } from './timeline';
import { MouseEventHandler } from 'react';
import { RxEvent, RxEventType } from '../../lib/rxExec';

type RxEventItemProps = {
  event: RxEvent;
  onClick?: MouseEventHandler<HTMLElement>;
  ctx: RxContext;
};

const toStyle = (ctx: RxContext, event: RxEvent) => {
  const show = event.ts < ctx.ts;
  const size = event.type !== RxEventType.COMPLETE ? 15: 7;
  return {
    top: event.sid * 20 + timelineConfig.offsetY,
    left: event.ts * timelineConfig.xscale * ctx.scale + timelineConfig.offsetX,
    width: show ? size : 0,
    height: show ? size : 0,
    display: show ? 'inline-flex' : 'none',
  }
}

export function RxNextEventItem({ event, onClick, ctx }: RxEventItemProps) {
  const val = event.val?.toString();

  return (
    <div
      className='event bg-indigo-400'
      style={toStyle(ctx, event)}
      onClick={onClick}
    >{val.length === 1 ? val : '?'}</div>
  );
}

export function RxErrorEventItem({ event, onClick, ctx }: RxEventItemProps) {
  const val = event.val?.toString();

  return (
    <div
      className='event bg-red-400'
      style={toStyle(ctx, event)}
      onClick={onClick}
    >{val.length === 1 ? val : '?'}</div>
  );
}

export function RxCompleteEventItem({ event, onClick, ctx }: RxEventItemProps) {
  return (
    <div
      className='event-sm bg-pink-400'
      style={toStyle(ctx, event)}
      onClick={onClick}
    ></div>
  );
}

export function RxEventItem({ event, onClick, ctx }: RxEventItemProps) {
  switch (event.type) {
    case RxEventType.NEXT:
      return <RxNextEventItem event={event} ctx={ctx} onClick={onClick} />;
    case RxEventType.ERROR:
      return <RxErrorEventItem event={event} ctx={ctx} onClick={onClick} />;
    case RxEventType.COMPLETE:
      return <RxCompleteEventItem event={event} ctx={ctx} onClick={onClick} />;
    default:
      return <></>;
  }
}
