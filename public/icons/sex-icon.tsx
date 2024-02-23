interface SexIconProps {
  fill: string;
}
export const SexIcon = ({ fill }: SexIconProps) => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M16.25 1.5625H13.125C12.8764 1.5625 12.6379 1.66127 12.4621 1.83709C12.2863 2.0129 12.1875 2.25136 12.1875 2.5C12.1875 2.74864 12.2863 2.9871 12.4621 3.16291C12.6379 3.33873 12.8764 3.4375 13.125 3.4375H13.9844L12.7625 4.66172C12.1368 4.1418 11.4001 3.77251 10.6092 3.58233C9.81824 3.39214 8.99418 3.38614 8.20055 3.56479C7.40691 3.74343 6.6649 4.10195 6.03173 4.6127C5.39856 5.12345 4.89115 5.77279 4.54861 6.51065C4.20607 7.24851 4.03756 8.05518 4.05606 8.86846C4.07457 9.68174 4.2796 10.4799 4.65535 11.2014C5.0311 11.9229 5.56753 12.5485 6.22327 13.0299C6.87902 13.5114 7.63657 13.8358 8.43751 13.9781V14.6875H6.87501C6.62637 14.6875 6.38791 14.7863 6.2121 14.9621C6.03628 15.1379 5.93751 15.3764 5.93751 15.625C5.93751 15.8736 6.03628 16.1121 6.2121 16.2879C6.38791 16.4637 6.62637 16.5625 6.87501 16.5625H8.43751V18.125C8.43751 18.3736 8.53628 18.6121 8.7121 18.7879C8.88791 18.9637 9.12637 19.0625 9.37501 19.0625C9.62365 19.0625 9.8621 18.9637 10.0379 18.7879C10.2137 18.6121 10.3125 18.3736 10.3125 18.125V16.5625H11.875C12.1236 16.5625 12.3621 16.4637 12.5379 16.2879C12.7137 16.1121 12.8125 15.8736 12.8125 15.625C12.8125 15.3764 12.7137 15.1379 12.5379 14.9621C12.3621 14.7863 12.1236 14.6875 11.875 14.6875H10.3125V13.9781C11.1515 13.8285 11.9422 13.4789 12.6176 12.9591C13.2929 12.4392 13.8332 11.7644 14.1926 10.9916C14.552 10.2188 14.72 9.37084 14.6824 8.5194C14.6448 7.66795 14.4027 6.83809 13.9766 6.1L15.3125 4.76562V5.625C15.3125 5.87364 15.4113 6.1121 15.5871 6.28791C15.7629 6.46373 16.0014 6.5625 16.25 6.5625C16.4986 6.5625 16.7371 6.46373 16.9129 6.28791C17.0887 6.1121 17.1875 5.87364 17.1875 5.625V2.5C17.1875 2.25136 17.0887 2.0129 16.9129 1.83709C16.7371 1.66127 16.4986 1.5625 16.25 1.5625ZM9.37501 12.1875C8.69514 12.1875 8.03053 11.9859 7.46524 11.6082C6.89994 11.2305 6.45935 10.6936 6.19917 10.0655C5.939 9.43735 5.87092 8.74619 6.00356 8.07938C6.1362 7.41257 6.46359 6.80006 6.94433 6.31932C7.42507 5.83858 8.03758 5.51119 8.70438 5.37855C9.37119 5.24591 10.0624 5.31399 10.6905 5.57416C11.3186 5.83434 11.8555 6.27493 12.2332 6.84023C12.6109 7.40552 12.8125 8.07013 12.8125 8.75C12.8115 9.66136 12.449 10.5351 11.8045 11.1795C11.1601 11.824 10.2864 12.1865 9.37501 12.1875Z'
        fill={fill}
      />
    </svg>
  );
};