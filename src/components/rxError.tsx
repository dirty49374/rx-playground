import { classNames, StyleProps } from "./types";

export function RxError({ className, style, error }: { error?: Error | null } & StyleProps) {
  return (
    <pre
      className={classNames(className, "error overflow-scroll")}
      style={style}
    >
      {error ?? ''}
    </pre>
  )

}
