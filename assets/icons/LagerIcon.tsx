interface Props {
  size?: string;
  color?: string;
  className?: string;
}

export const LagerIcon = ({
  size = "24",
  color = "#000",
  className,
}: Props) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 32 32"
    >
      <path d="M28 0h-24c-1.061 0-2.078 0.421-2.828 1.172s-1.172 1.768-1.172 2.828v28h32v-28c0-1.061-0.421-2.078-1.172-2.828s-1.768-1.172-2.828-1.172v0zM29.333 4v2.667h-9.333v-4h8c0.354 0 0.693 0.14 0.943 0.391s0.391 0.589 0.391 0.943zM14.667 2.667h2.667v8h-2.667v-8zM4 2.667h8v4h-9.333v-2.667c0-0.354 0.14-0.693 0.391-0.943s0.589-0.391 0.943-0.391zM2.667 29.333v-20h9.333v4h8v-4h9.333v20h-26.667zM20 24h6.667v2.667h-6.667v-2.667z"></path>
    </svg>
  );
};
