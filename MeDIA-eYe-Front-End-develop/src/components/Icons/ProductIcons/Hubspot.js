import React from 'react';
import { useSelector } from 'react-redux';

export function Hubspot() {
  const theme = useSelector((state) => state.app.darkTheme);
  return (
    <svg
      width="20"
      height="22"
      viewBox="0 0 20 22"
      fill="none"
      xmlns="https://www.w3.org/2000/svg"
    >
      <path
        d="M19.2857 10.4503C18.7932 9.61194 18.1004 8.93984 17.2343 8.43385C16.5871 8.06106 15.9159 7.82445 15.1596 7.72284V5.05896C15.9159 4.74125 16.3853 4.03801 16.3853 3.2176C16.3853 2.09937 15.4789 1.19321 14.3496 1.19321C13.2193 1.19321 12.2971 2.09937 12.2971 3.2176C12.2971 4.03801 12.7394 4.74125 13.4957 5.05896V7.72403C12.8906 7.81054 12.2632 7.99716 11.6902 8.2839C10.5199 7.40452 6.68235 4.5196 4.43745 2.83463C4.4907 2.64472 4.53169 2.44897 4.53169 2.24244C4.53169 1.00389 3.51792 0 2.26562 0C1.01331 0 0 1.00389 0 2.24244C0 3.48084 1.01437 4.48503 2.26668 4.48503C2.69385 4.48503 3.08894 4.36142 3.42989 4.15819L3.90365 4.51377L10.4134 9.15429C10.0693 9.46693 9.74875 9.82251 9.49236 10.2215C8.97277 11.0349 8.65527 11.9298 8.65527 12.906V13.1097C8.65527 13.795 8.78687 14.4419 9.01104 15.0497C9.20844 15.5804 9.49705 16.0629 9.85449 16.4991L7.69399 18.6419C7.50234 18.572 7.30101 18.5337 7.09091 18.5337C6.6232 18.5337 6.18454 18.7145 5.85373 19.0412C5.52261 19.3688 5.34125 19.8038 5.34125 20.2668C5.3414 20.7297 5.52367 21.1648 5.85463 21.4921C6.18545 21.8195 6.62517 22 7.09318 22C7.56119 22 8.00106 21.8195 8.33218 21.4921C8.66253 21.1648 8.84496 20.7296 8.84496 20.2668C8.84496 20.0877 8.81697 19.9129 8.76433 19.7468L10.9974 17.5371C11.3036 17.7463 11.6342 17.9225 11.9897 18.0744C12.6908 18.3743 13.4647 18.557 14.3116 18.557H14.4668C15.4031 18.557 16.2863 18.3394 17.1166 17.8943C17.9915 17.424 18.6763 16.7808 19.1936 15.9596C19.7137 15.1362 20 14.2264 20 13.2255V13.1755C20 12.191 19.7696 11.2825 19.2857 10.4503ZM16.5573 15.0856C15.9511 15.752 15.2544 16.1625 14.4668 16.1625H14.337C13.8872 16.1625 13.4471 16.0395 13.0163 15.8158C12.5308 15.5694 12.1617 15.218 11.8596 14.7731C11.5474 14.3364 11.378 13.8596 11.378 13.3541V13.2005C11.378 12.7035 11.4744 12.2323 11.7173 11.7872C11.977 11.3007 12.3278 10.9223 12.7943 10.6215C13.2523 10.3228 13.7415 10.1763 14.2863 10.1763H14.337C14.831 10.1763 15.2987 10.2727 15.7401 10.4961C16.1898 10.7344 16.5573 11.0599 16.8421 11.488C17.1187 11.9163 17.2833 12.3783 17.3363 12.8816C17.3446 12.9862 17.3488 13.0934 17.3488 13.1958C17.3488 13.8788 17.085 14.5114 16.5573 15.0856Z"
        fill="white"
      />
    </svg>
  );
}
export default Hubspot;
