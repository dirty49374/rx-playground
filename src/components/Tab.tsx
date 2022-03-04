import { classNames, StyleProps } from "./types";

type TabProps = {
  tabs: string[];
  children: JSX.Element | JSX.Element[];
  select: string;
  onChange?: (m: string) => void;
} & StyleProps;

export const Tab = ({ tabs, children, select, onChange, className, style }: TabProps) => {
  const array = children instanceof Array ? children : [children];
  const index = tabs.indexOf(select);

  return (
    <>
      <ul className={classNames(className, "tabs")} style={style}>
        {tabs.map(p =>
          <li className="mr-2" key={p}>
            <span onClick={() => onChange?.call(null, p)}
              className={classNames('tab cursor-pointer', select === p ? 'tab-selected' : '')}
            >
              {p}
            </span>
          </li>
        )}
      </ul>
      {array[index]}

    </>

  );
}