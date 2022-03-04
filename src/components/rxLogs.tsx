import { classNames, StyleProps } from "./types";

export function RxLogs({ className, style, logs }: { logs: string[] } & StyleProps) {
  return (
    <pre className={classNames(className, 'log overflow-scroll')} style={style}>
      {logs.map((p, i) =>
        <p key={i}>{p}</p>
      )}
    </pre>
  );
}
