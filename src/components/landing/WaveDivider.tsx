interface WaveDividerProps {
  type: "top" | "bottom";
  bgColor?: string;
  flip?: boolean;
}

const WaveDivider = ({ type, bgColor, flip }: WaveDividerProps) => {
  const src =
  type === "top" ?
  "https://info.goecfx.com/hubfs/curve.png" :
  "https://info.goecfx.com/hubfs/Bottom-curve.png";

  return;















};

export default WaveDivider;