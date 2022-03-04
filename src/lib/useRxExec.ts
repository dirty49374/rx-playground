import { createContext, useContext } from "react";
import { RxExec } from "./rxExec";

export const RxExecContext = createContext(new RxExec());

export function useRxExec(): RxExec {
  return useContext(RxExecContext);
}
