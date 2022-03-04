import { merge, of } from "rxjs";
import { ObservableItem } from "./types";

export default function test3(): ObservableItem[] {
  const o1 = of(1, 2, 3);
  const o2 = of(4, 5, 6);
  const merged = merge(o1, o2);

  return [
    { name: 'o1', observable: o1 },
    { name: 'o2', observable: o2 },
    { name: 'merged', observable: merged },
  ]
}
