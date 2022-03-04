import { take, timer } from "rxjs";
import { ObservableItem } from "./types";

export default function test2(): ObservableItem[] {
  const o1 = timer(0, 1000).pipe(take(5));
  const o2 = timer(0, 1000).pipe(take(3));
  return [
    { name: 'o1', observable: o1 },
    { name: 'o2', observable: o2 },
  ]
}
