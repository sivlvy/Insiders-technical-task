interface Props {
  size?: string;
  color?: string;
  className?: string;
}

export const EinkaufIcon = ({
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
        d="M26.885 17.333h-19.66l-1.255-10.667h10.029v-2.667h-10.344l-0.056-0.469c-0.115-0.973-0.583-1.869-1.314-2.52s-1.677-1.010-2.656-1.011h-1.629v2.667h1.629c0.327 0 0.642 0.12 0.886 0.337s0.4 0.516 0.438 0.84l2.113 17.957c0.115 0.973 0.582 1.87 1.314 2.521s1.677 1.011 2.657 1.011h17.629v-2.667h-17.629c-0.327 0-0.642-0.12-0.886-0.337s-0.4-0.517-0.438-0.841l-0.175-1.488h21.576l1.2-6.667h-2.708l-0.721 4z"
      ></path>
      <path
        fill={color}
        d="M9.334 32.001c1.473 0 2.667-1.194 2.667-2.667s-1.194-2.667-2.667-2.667c-1.473 0-2.667 1.194-2.667 2.667s1.194 2.667 2.667 2.667z"
      ></path>
      <path
        fill={color}
        d="M22.667 32.001c1.473 0 2.667-1.194 2.667-2.667s-1.194-2.667-2.667-2.667c-1.473 0-2.667 1.194-2.667 2.667s1.194 2.667 2.667 2.667z"
      ></path>
      <path
        fill={color}
        d="M22.77 11.39h0.044c0.331 0.001 0.658-0.064 0.964-0.19s0.583-0.313 0.816-0.547l7.015-7.015-1.885-1.885-6.908 6.915-2.992-3.12-1.921 1.848 3.075 3.2c0.23 0.247 0.507 0.444 0.815 0.581s0.641 0.209 0.978 0.214z"
      ></path>
    </svg>
  );
};
