export type LoaderProps = {
  size?: number;
  width?: number;
  color?: string;
};

export function Loader({ size, width, color }: LoaderProps) {
  return (
    <span
      style={{
        width: size,
        height: size,
        borderWidth: width,
        borderColor: color,
        borderBottomColor: 'transparent',
      }}
      className="loader"
    ></span>
  );
}
