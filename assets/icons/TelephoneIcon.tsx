interface Props {
  size?: string;
  color?: string;
  className?: string;
}

export const TelephoneIcon = ({
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
        style={{ fill: "var(--color1, #7f858d)" }}
        d="M18.934 21.681c-3.882-1.644-6.969-4.738-8.604-8.624l4.533-4.541-8.347-8.353-4.228 4.227c-0.733 0.738-1.313 1.613-1.706 2.576s-0.591 1.994-0.582 3.034c0 9.664 12.336 22 22 22 1.040 0.009 2.071-0.188 3.034-0.581s1.838-0.973 2.575-1.707l4.228-4.228-8.353-8.353-4.551 4.551zM25.723 27.827c-0.49 0.485-1.071 0.869-1.71 1.127s-1.323 0.388-2.013 0.38c-8.311 0-19.333-11.023-19.333-19.333-0.008-0.69 0.121-1.374 0.38-2.013s0.642-1.221 1.127-1.711l2.343-2.343 4.583 4.583-3.913 3.913 0.327 0.819c0.962 2.572 2.465 4.908 4.408 6.849s4.281 3.441 6.854 4.399l0.808 0.308 3.901-3.903 4.583 4.583-2.344 2.343zM18.667 2.667v-2.667c3.535 0.004 6.924 1.41 9.424 3.91s3.906 5.889 3.909 9.424h-2.667c-0.003-2.828-1.128-5.539-3.128-7.539s-4.711-3.125-7.539-3.128zM18.667 8v-2.667c2.121 0.002 4.155 0.846 5.654 2.345s2.343 3.533 2.346 5.655h-2.667c0-1.415-0.562-2.771-1.562-3.771s-2.357-1.562-3.771-1.562z"
      ></path>
    </svg>
  );
};