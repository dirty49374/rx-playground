import { CSSProperties } from "react";

export const range = (n: number) => [...Array(n).keys()];

export type StyleProps = {
  className?: string;
  style?: CSSProperties;
};

export const classNames = (...classNames: (string | null | undefined)[]) => {
  return classNames.map(p => p ?? '').join(' ');
}

export const styles = (...styles: (CSSProperties | null | undefined)[]): CSSProperties => {
  return styles.reduce(
    (sum, v) => Object.assign(sum, v || {}),
    {}
  ) as CSSProperties;
}

