import { range } from "./types";

export const MultipleLines = ({ lines = 20 }) => <>
  {range(lines).map((p, n) => <span key={n}>#{p} abcdefghijklmlopqrstuvwxyz<br /></span>)}
</>;
