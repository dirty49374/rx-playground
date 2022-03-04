import Editor from "@monaco-editor/react";
import { useEffect, useState } from "react";
import { useRxExec } from "../lib/useRxExec";
import { RxTimeline } from "./rxTimeline";
import { RxLogs } from "./rxLogs";
import { RxError } from "./rxError";
import { RxInspectEvent } from "./rxInspectEvent";
import { RxScaleSlider } from "./rxScaleSlider";
import { StyleProps } from "./types";
import { Tab } from "./Tab";
import { useAppSelector } from "../redux/hooks";
import { useDispatch } from "react-redux";
import { uiActions } from "../redux/uiReducer";
import { useCurrentSection } from "../lib/useCurrentSection";
import { RxState } from "../lib/rxExec";
import { lectureService } from "../lecture";
import { useNavigate } from "react-router-dom";
import { RxNote } from "./rxNote";

export function RxPlayground({ className, style }: StyleProps) {
  const dispatch = useDispatch();
  const section = useCurrentSection();
  const {
    propertyTab,
    runtimeTab,
    error,
    inspect,
  } = useAppSelector(s => s.uiState);
  const navigate = useNavigate();

  const rxExec = useRxExec();
  const [runId, setRunId] = useState(0);
  const [src, setSrc] = useState(section.code);
  const [autoScroll, setAutoScroll] = useState(true);
  const [rxState, setRxState] = useState<RxState>(rxExec.emptyState());
  const [running, setRuning] = useState(false);
  const [scale, setScale] = useState(2);

  useEffect(() => {
    setSrc(section.code);
    setRunId(0);
    dispatch(uiActions.selectRuntimeTab('NOTE'));
  }, [section, dispatch]);

  useEffect(() => {
    if (runId === 0) return;

    try {
      setRuning(true);
      dispatch(uiActions.selectRuntimeTab('TIMELINE'));
      dispatch(uiActions.selectPropertyTab('LOGS'));

      const subscription = rxExec.run(src).subscribe({
        next: v => setRxState(v),
        error: e => {
          setRunId(0);
          dispatch(uiActions.setError(e.stack));
        },
        complete: () => setRunId(0)
      });

      return () => {
        setRuning(false);
        subscription.unsubscribe();
      };
    } catch (e: any) {
      dispatch(uiActions.setError(e.stack));
    }
  }, [runId]);

  const execute = () => {
    if (running) setRunId(0);
    else setRunId(runId + 1);
  }

  return (
    <div className='flex-[1] flex flex-row playground'>
      <div className='flex flex-col flex-[3] p-2'>

        <Tab tabs={["Editor"]} select="Editor">
          <div className='flex-none h-[40vh]'>
            <Editor
              // width="100%"
              height="40vh"
              defaultLanguage="javascript"
              theme='vs-dark'
              options={{
                fontFamily: 'monospace',
                minimap: {
                  enabled: false,
                }
              }}
              value={src}
              onChange={e => setSrc(e!)}
            />
          </div>
        </Tab>

        <div className='flex-none flex flex-row justify-end items-center'>
          <button className="btn"
            onClick={() => navigate(lectureService.toPath(lectureService.prevSection(section)))}>prev</button>
          <button className="btn"
            onClick={() => navigate(lectureService.toPath(lectureService.nextSection(section)))}>next</button>
          <RxScaleSlider className="flex-1" scale={scale} onChange={setScale} />
          {/* <button className='btn text-[0.7em]' onClick={() => setAutoScroll(!autoScroll)}>{autoScroll ? 'STOP-AUTOSCROLL' : 'AUTO-SCROLL'}</button> */}
          <button className='btn' onClick={() => execute()}>{running ? 'STOP' : 'START'}</button>
        </div>

        <Tab className="flex-none min-w-0"
          tabs={["TIMELINE", "NOTE"]} select={runtimeTab}
          onChange={t => dispatch(uiActions.selectRuntimeTab(t as any))}
        >
          <RxTimeline
            className="flex-1"
            state={rxState}
            scale={scale}
            autoScroll={autoScroll}
            setInspect={v => dispatch(uiActions.setInspect(v))}
          />
          <RxNote className="flex-1 overrflow-auto" section={section} />
        </Tab>
      </div>

      <div className='flex-[2] flex flex-col min-w-0 py-2 pr-2'>
        <Tab
          tabs={["LOGS", "INSPECT", "ERROR"]} select={propertyTab}
          onChange={t => dispatch(uiActions.selectPropertyTab(t as any))}
        >
          <RxLogs className="flex-1" logs={rxState.logs} />
          <RxInspectEvent className="flex-1" rxState={rxState} event={inspect} />
          <RxError className="flex-1" error={error} />
        </Tab>
      </div>

    </div>
  );
}