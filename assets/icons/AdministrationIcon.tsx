interface Props {
  size?: string;
  color?: string;
  className?: string;
}

const AdministrationIcon = ({
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
        d="M20.001 32h-8v-4.684c-1.39-0.492-2.678-1.236-3.799-2.195l-4.059 2.345-4-6.933 4.057-2.34c-0.267-1.45-0.267-2.937 0-4.387l-4.057-2.34 4-6.933 4.059 2.345c1.121-0.959 2.408-1.703 3.799-2.195v-4.684h8v4.684c1.39 0.492 2.678..."
      ></path>
    </svg>
  );
};

export default AdministrationIcon;
