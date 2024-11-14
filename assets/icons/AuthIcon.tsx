interface Props {
  size?: string;
  color?: string;
  className?: string;
}

export const AuthIcon = ({ size = "24", color = "#000", className }: Props) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 32 32"
    >
      <path fill={color} d="M32 5.334h-22.667v2.667h22.667v-2.667z"></path>
      <path fill={color} d="M32 14.666h-22.667v2.667h22.667v-2.667z"></path>
      <path fill={color} d="M32 24h-22.667v2.667h22.667v-2.667z"></path>
      <path
        fill={color}
        d="M2.667 9.333c1.473 0 2.667-1.194 2.667-2.667s-1.194-2.667-2.667-2.667c-1.473 0-2.667 1.194-2.667 2.667s1.194 2.667 2.667 2.667z"
      ></path>
      <path
        fill={color}
        d="M2.667 18.667c1.473 0 2.667-1.194 2.667-2.667s-1.194-2.667-2.667-2.667c-1.473 0-2.667 1.194-2.667 2.667s1.194 2.667 2.667 2.667z"
      ></path>
      <path
        fill={color}
        d="M2.667 28c1.473 0 2.667-1.194 2.667-2.667s-1.194-2.667-2.667-2.667-2.667 1.194-2.667 2.667c0 1.473 1.194 2.667 2.667 2.667z"
      ></path>
    </svg>
  );
};
