import { Section } from "../lecture"
import { classNames, StyleProps } from "./types";

type RxNoteProps = {
  section: Section;
} & StyleProps;

export const RxNote: React.FC<RxNoteProps> = ({ section, className, style }) => {
  return (
    <pre className={classNames(className, "flex-1 overrflow-auto text-black bg-white")} style={style}>
      {section.note}
    </pre>
  );
}
