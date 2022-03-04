import { classNames, StyleProps } from "./types";

type RxScaleSliderProps = {
  scale: number;
  onChange: (scale: number) => void;
} & StyleProps;

export const RxScaleSlider = ({ className, style, scale, onChange }: RxScaleSliderProps) => {
  return (
    <div className={classNames(className, "flex flex-row items-center")} style={style}>
      {/* scale slider */}
      <label htmlFor="scale-range" className="text-right mr-2 form-label w-32">scale: {scale}</label>
      <input id="scale-range"
        type="range"
        min={0.01} max={10} step={0.01}
        value={scale}
        className="w-full h-2 bg-blue-100 cursor-pointer"
        onChange={v => onChange(Number.parseFloat(v.target.value))}
      />
    </div>
  );

}