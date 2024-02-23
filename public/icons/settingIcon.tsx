interface SettingIconProps {
  fill: string;
}

export const SettingIcon = ({ fill }: SettingIconProps) => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M9.99992 5.62492C9.13463 5.62492 8.28877 5.88151 7.56931 6.36224C6.84984 6.84298 6.28909 7.52626 5.95795 8.32568C5.62682 9.12511 5.54018 10.0048 5.70899 10.8534C5.8778 11.7021 6.29448 12.4817 6.90633 13.0935C7.51819 13.7054 8.29774 14.122 9.14641 14.2909C9.99507 14.4597 10.8747 14.373 11.6742 14.0419C12.4736 13.7108 13.1569 13.15 13.6376 12.4305C14.1183 11.7111 14.3749 10.8652 14.3749 9.99992C14.3749 8.8396 13.914 7.7268 13.0935 6.90633C12.273 6.08586 11.1602 5.62492 9.99992 5.62492ZM9.99992 12.4999C9.50547 12.4999 9.02212 12.3533 8.611 12.0786C8.19988 11.8039 7.87945 11.4134 7.69023 10.9566C7.50101 10.4998 7.4515 9.99715 7.54796 9.5122C7.64442 9.02725 7.88253 8.58179 8.23216 8.23216C8.58179 7.88253 9.02725 7.64442 9.5122 7.54796C9.99715 7.4515 10.4998 7.50101 10.9566 7.69023C11.4134 7.87944 11.8039 8.19988 12.0786 8.611C12.3533 9.02212 12.4999 9.50547 12.4999 9.99992C12.4979 10.6623 12.2338 11.297 11.7654 11.7654C11.297 12.2338 10.6623 12.4979 9.99992 12.4999ZM18.5937 11.5624L17.4921 10.0937V9.90617L18.5937 8.43742C18.6774 8.32312 18.7349 8.1917 18.7619 8.05258C18.7889 7.91346 18.7848 7.77009 18.7499 7.63274C18.5481 6.88326 18.2487 6.16356 17.8593 5.49211C17.7893 5.36798 17.6915 5.26175 17.5736 5.18178C17.4557 5.1018 17.3208 5.05025 17.1796 5.03117L15.3749 4.77336L15.2265 4.62492L14.9687 2.82024C14.9496 2.67903 14.898 2.54416 14.8181 2.42623C14.7381 2.3083 14.6319 2.21051 14.5077 2.14055C13.8363 1.75119 13.1166 1.45175 12.3671 1.24993C12.23 1.21274 12.0861 1.20749 11.9466 1.23458C11.8071 1.26166 11.6757 1.32037 11.5624 1.40618L10.1015 2.49992H9.89836L8.43743 1.40618C8.32312 1.32241 8.1917 1.26496 8.05258 1.23794C7.91346 1.21093 7.77009 1.21502 7.63274 1.24993C6.88326 1.45175 6.16356 1.75119 5.49211 2.14055C5.36798 2.21051 5.26175 2.3083 5.18178 2.42623C5.1018 2.54416 5.05025 2.67903 5.03118 2.82024L4.77336 4.62492C4.72004 4.67041 4.67041 4.72004 4.62493 4.77336L2.82024 5.03117C2.67903 5.05025 2.54416 5.1018 2.42623 5.18178C2.3083 5.26175 2.21051 5.36798 2.14055 5.49211C1.75119 6.16356 1.45175 6.88326 1.24993 7.63274C1.21274 7.76989 1.20749 7.91374 1.23458 8.05323C1.26166 8.19273 1.32037 8.32416 1.40618 8.43742L2.50774 9.90617V10.0937L1.40618 11.5624C1.32241 11.6767 1.26496 11.8082 1.23794 11.9473C1.21093 12.0864 1.21502 12.2298 1.24993 12.3671C1.45175 13.1166 1.75119 13.8363 2.14055 14.5077C2.21051 14.6319 2.3083 14.7381 2.42623 14.8181C2.54416 14.898 2.67903 14.9496 2.82024 14.9687L4.62493 15.2265L4.77336 15.3749L5.03118 17.1796C5.05025 17.3208 5.1018 17.4557 5.18178 17.5736C5.26175 17.6915 5.36798 17.7893 5.49211 17.8593C6.16356 18.2487 6.88326 18.5481 7.63274 18.7499C7.71148 18.7723 7.7931 18.7828 7.87493 18.7812C8.07796 18.7823 8.27569 18.7164 8.43743 18.5937L9.89836 17.4999H10.1015L11.5624 18.5937C11.6767 18.6774 11.8082 18.7349 11.9473 18.7619C12.0864 18.7889 12.2298 18.7848 12.3671 18.7499C13.1166 18.5481 13.8363 18.2487 14.5077 17.8593C14.6319 17.7893 14.7381 17.6915 14.8181 17.5736C14.898 17.4557 14.9496 17.3208 14.9687 17.1796L15.2343 15.3671L15.3671 15.2343L17.1796 14.9687C17.3208 14.9496 17.4557 14.898 17.5736 14.8181C17.6915 14.7381 17.7893 14.6319 17.8593 14.5077C18.2487 13.8363 18.5481 13.1166 18.7499 12.3671C18.7871 12.23 18.7924 12.0861 18.7653 11.9466C18.7382 11.8071 18.6795 11.6757 18.5937 11.5624ZM16.4452 13.1796L14.7812 13.4218C14.5728 13.4526 14.3805 13.5514 14.2343 13.703C14.1015 13.8437 13.8515 14.1015 13.7265 14.2109C13.5616 14.3597 13.4538 14.5614 13.4218 14.7812L13.1796 16.4452C12.897 16.5883 12.6046 16.711 12.3046 16.8124L10.9609 15.7968C10.7837 15.6642 10.5644 15.6003 10.3437 15.6171H9.65617C9.43563 15.6017 9.21681 15.6654 9.03899 15.7968L7.69524 16.8124C7.39522 16.711 7.10281 16.5883 6.82024 16.4452L6.57805 14.7812C6.54604 14.5614 6.43828 14.3597 6.27336 14.2109C6.1004 14.0613 5.93852 13.8994 5.78899 13.7265C5.64019 13.5616 5.43847 13.4538 5.21868 13.4218L3.55461 13.1796C3.41158 12.897 3.28887 12.6046 3.18742 12.3046L4.20305 10.9609C4.32755 10.7911 4.39337 10.5854 4.39055 10.3749C4.38274 10.1796 4.37492 9.82024 4.38274 9.65617C4.39813 9.43562 4.33443 9.21681 4.20305 9.03899L3.18742 7.69524C3.28887 7.39522 3.41158 7.10281 3.55461 6.82024L5.21868 6.57805C5.43847 6.54604 5.64019 6.43828 5.78899 6.27336C5.93852 6.1004 6.1004 5.93852 6.27336 5.78899C6.43828 5.64019 6.54604 5.43847 6.57805 5.21867L6.82024 3.55461C7.10281 3.41158 7.39522 3.28887 7.69524 3.18742L9.03899 4.20305C9.21618 4.3357 9.43548 4.39954 9.65617 4.38274C9.88274 4.37492 10.1171 4.37492 10.3437 4.38274C10.5644 4.39954 10.7837 4.3357 10.9609 4.20305L12.3046 3.18742C12.6046 3.28887 12.897 3.41158 13.1796 3.55461L13.4218 5.21867C13.4538 5.43847 13.5616 5.64019 13.7265 5.78899C13.8994 5.93852 14.0613 6.1004 14.2109 6.27336C14.3597 6.43828 14.5614 6.54604 14.7812 6.57805L16.4452 6.82024C16.5883 7.10281 16.711 7.39522 16.8124 7.69524L15.7968 9.03899C15.6713 9.2078 15.6078 9.41475 15.6171 9.62492C15.6171 9.82024 15.6249 10.1796 15.6171 10.3437C15.6003 10.5644 15.6642 10.7837 15.7968 10.9609L16.8124 12.3046C16.711 12.6046 16.5883 12.897 16.4452 13.1796Z'
        fill={fill}
      />
    </svg>
  );
};
