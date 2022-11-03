import React from 'react';
import { useSelector } from 'react-redux';

export function Fire() {
  const theme = useSelector((state) => state.app.darkTheme);
  return (
    <svg
      width="17"
      height="26"
      viewBox="0 0 17 26"
      fill="none"
      xmlns="https://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.79642 0.0987884C5.79796 0.163459 5.81862 0.479884 5.84232 0.801962C5.93109 2.01002 5.74848 3.19547 5.28858 4.39681C5.04914 5.02222 4.3898 6.39588 3.5311 8.05826C2.73733 9.59486 1.13265 12.887 0.87647 13.5045C-0.63626 17.1504 -0.191462 20.5753 2.21573 23.8168C2.59088 24.3221 3.5466 25.3434 3.99999 25.7236C4.359 26.0246 4.43401 26.0633 4.37971 25.9189C4.29849 25.7032 3.99696 24.4072 3.90893 23.8958C3.71748 22.7831 3.6835 22.3709 3.68634 21.196C3.68942 19.9239 3.77238 19.2165 4.03581 18.2171C4.30828 17.1831 4.84021 16.0226 5.43508 15.1641C5.94823 14.4237 6.85849 13.4876 7.43284 13.1097L7.55703 13.0279L7.5395 13.8021C7.49449 15.7885 7.90635 17.8112 8.75963 19.794C9.06961 20.5143 9.43706 21.2361 9.75107 21.7416L9.96348 22.0836L10.1547 22.0144C10.59 21.857 11.6204 21.2439 12.4908 20.6244C12.7454 20.4432 12.9652 20.3066 12.9792 20.321C13.0171 20.3598 12.9094 21.413 12.7934 22.138C12.6886 22.7927 12.3632 24.3508 12.1096 25.4118C12.0307 25.742 11.9842 26.0055 12.0064 25.9973C12.118 25.9564 13.0039 25.0679 13.4572 24.5425C14.8269 22.9545 15.7718 21.3587 16.3804 19.6052C16.6357 18.8695 16.8632 17.9344 16.9185 17.3929C16.9481 17.104 16.9826 16.771 16.9951 16.6528C17.0077 16.5346 16.995 16.0652 16.9669 15.6096C16.8366 13.4935 16.1136 11.2719 14.8659 9.15307L14.611 8.72024L14.5786 9.7132C14.541 10.8679 14.4534 11.5407 14.2075 12.5648C13.8444 14.0768 13.2899 15.3581 12.4337 16.664C12.1281 17.1301 11.6636 17.7588 11.6249 17.7588C11.6132 17.7588 11.6482 17.6691 11.7027 17.5596C12.2905 16.3786 12.5519 14.2199 12.4493 11.3936C12.3938 9.86607 12.3422 9.26591 12.1979 8.4726C11.6768 5.60792 9.97714 2.96912 7.39543 1.01649C7.08089 0.778589 6.18081 0.194826 5.83079 0.0017832C5.81033 -0.00952135 5.79483 0.0341183 5.79642 0.0987884Z"
        fill="url(#paint0_linear_4691_2889)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4691_2889"
          x1="-1.54545"
          y1="39.0007"
          x2="21.5307"
          y2="38.9979"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2187FF" />
          <stop offset="1" stopColor="#851FD5" />
        </linearGradient>
      </defs>
    </svg>
  );
}
export default Fire;