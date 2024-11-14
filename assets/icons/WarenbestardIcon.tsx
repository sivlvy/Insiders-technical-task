interface Props {
  size?: string;
  color?: string;
  className?: string;
}

const WarenbestardIcon = ({
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
      <path
        fill={color}
        d="M16.163 0l-14 8v16l14 8 14-8v-16l-14-8zM26.18 8.8l-10.164 5.669-9.785-5.723 9.932-5.68 10.017 5.733zM4.83 11.016l9.837 5.749v11.309l-9.837-5.623v-11.436zM17.334 28.259v-11.476l10.163-5.668v11.333l-10.163 5.811z"
      ></path>
    </svg>
  );
};

export default WarenbestardIcon;
