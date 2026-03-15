interface WaveDividerProps {
  type: "top" | "bottom";
}

const WaveDivider = ({ type }: WaveDividerProps) => {
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
      style={{ margin: 0, padding: 0 }}
    />
  );
};

export default WaveDivider;
