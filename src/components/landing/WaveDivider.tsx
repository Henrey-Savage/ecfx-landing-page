interface WaveDividerProps {
  type: "top" | "bottom";
  bgColor?: string;
  flip?: boolean;
}

const WaveDivider = ({ type, bgColor, flip }: WaveDividerProps) => {
  const src =
    type === "top"
      ? "https://info.goecfx.com/hubfs/curve.png"
      : "https://info.goecfx.com/hubfs/Bottom-curve.png";

  return (
    <div className={`w-full leading-[0] ${flip ? "rotate-180" : ""}`} style={{ backgroundColor: bgColor }}>
      <img src={src} alt="" className="w-full block" />
    </div>
  );
};

export default WaveDivider;
