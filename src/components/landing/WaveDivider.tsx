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
    <img
      src={src}
      alt=""
      role="presentation"
      className="block w-full h-auto md:h-auto max-h-[40px] md:max-h-none object-cover"
      style={{
        margin: 0,
        padding: 0,
        marginTop: "-1px",
        marginBottom: "-1px",
        backgroundColor: bgColor || "transparent",
        transform: flip ? "scaleY(-1)" : undefined,
      }}
    />
  );
};

export default WaveDivider;
