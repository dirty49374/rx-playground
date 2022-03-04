import { useCurrentSection } from "../lib/useCurrentSection";
import { useAppDispatch } from "../redux/hooks";
import { uiActions } from "../redux/uiReducer";
import { NavMenu } from "./navMenu";
import { classNames, StyleProps } from "./types";

export function NavBar({ className, style }: StyleProps) {
  const section = useCurrentSection();
  const dispatch = useAppDispatch();

  return (
    <>
      <div className={classNames(className, 'nav')} style={style}>
        <div className='nav-logo cursor-pointer' onClick={() => dispatch(uiActions.openMenu(true))}>
          <p>MENU</p>
        </div>
        <div className='nav-menu'>
          {section.id} - {section.title}
        </div>

      </div>

      <NavMenu />
    </>
  );
}
