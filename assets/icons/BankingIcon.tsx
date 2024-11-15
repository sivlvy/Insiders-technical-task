interface Props {
  size?: string;
  color?: string;
  className?: string;
}

const BankingIcon = ({ size = "24", color = "#000", className }: Props) => {
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
        d="M0 29.333h32v2.667h-32v-2.667zM32 10.545v2.788h-4v13.333h-24v-13.333h-4v-2.788c-0-0.719 0.193-1.424 0.56-2.042s0.893-1.126 1.524-1.47l12-6.545c0.587-0.322 1.246-0.49 1.916-0.49s1.329 0.169 1.916 0.49l12 6.545c0.631 0.344 1.157 0.852 1.524 1.47s0.56 1.323 0.56 2.042zM6.667 24h4v-10.667h-4v10.667zM13.333 13.333v10.667h5.333v-10.667h-5.333zM25.333 13.333h-4v10.667h4v-10.667zM29.333 10.545c0-0.24-0.065-0.475-0.187-0.681s-0.298-0.375-0.508-0.49l-12-6.545c-0.196-0.107-0.416-0.163-0.639-0.163s-0.443 0.056-0.639 0.163l-12 6.545c-0.21 0.115-0.386 0.284-0.508 0.49s-0.187 0.441-0.187 0.681v0.121h26.667v-0.121z"
      ></path>
    </svg>
  );
};

export default BankingIcon;
