interface BackIconProps {
  fill: string;
}

export const BackIcon = ({ fill }: BackIconProps) => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12.2584 5.59173C12.1813 5.51447 12.0897 5.45318 11.9889 5.41137C11.8881 5.36955 11.78 5.34802 11.6709 5.34802C11.5617 5.34802 11.4536 5.36955 11.3528 5.41137C11.252 5.45318 11.1604 5.51447 11.0834 5.59173L7.25835 9.41673C7.1811 9.49382 7.11981 9.58539 7.07799 9.68621C7.03617 9.78702 7.01465 9.89509 7.01465 10.0042C7.01465 10.1134 7.03617 10.2214 7.07799 10.3222C7.11981 10.4231 7.1811 10.5146 7.25835 10.5917L11.0834 14.4167C11.1605 14.4939 11.2521 14.5551 11.3529 14.5968C11.4537 14.6386 11.5617 14.6601 11.6709 14.6601C11.78 14.6601 11.888 14.6386 11.9888 14.5968C12.0896 14.5551 12.1812 14.4939 12.2584 14.4167C12.3355 14.3396 12.3967 14.248 12.4385 14.1472C12.4802 14.0464 12.5017 13.9383 12.5017 13.8292C12.5017 13.7201 12.4802 13.6121 12.4385 13.5113C12.3967 13.4105 12.3355 13.3189 12.2584 13.2417L9.02502 10.0001L12.2584 6.76673C12.5834 6.44173 12.575 5.90839 12.2584 5.59173Z'
        fill={fill}
      />
    </svg>
  );
};
