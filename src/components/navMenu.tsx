import { useNavigate } from "react-router-dom";
import { Section, lectureService } from "../lecture";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { uiActions } from "../redux/uiReducer";
import { StyleProps, classNames } from "./types";

export function NavMenu({ className, style }: StyleProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const open = useAppSelector(s => s.uiState).menuOpen;

  const goto = (section: Section) => {
    navigate(lectureService.toPath(section));
    dispatch(uiActions.openMenu(false));
  }

  return (

    <div style={{ display: open ? 'block' : 'none' }}
      className="fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal h-full inset-0">
      <div className="relative px-4 w-[80vw] h-[80vh] mx-auto">

        <div className="relative bg-slate-300 rounded-lg shadow p-5">

          <div className="flex justify-between items-start rounded-t border-b border-slate-500">
            <h3 className="text-xl font-semibold">
              Contents
            </h3>
            <button type="button" onClick={() => dispatch(uiActions.openMenu(false))} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path></svg>
            </button>
          </div>

          <div className={classNames(className, 'flex flex-col w-[80vw] h-[80vh]')} style={{ flexWrap: 'wrap' }}>
            {lectureService.getChapters().map(chapter =>
              <div key={chapter.id} className="mb-3">
                <p className='text-blue-900 font-semibold text-[0.9em] py-1'>{chapter.title}</p>
                {chapter.sections.map(section =>
                  <p className='cursor-pointer text-xs pl-6 text-blue-700 hover:text-blue-400'
                    onClick={() => goto(section)} key={section.id}
                  >
                    {section.id} {section.title}
                  </p>
                )}
                <p></p>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}
