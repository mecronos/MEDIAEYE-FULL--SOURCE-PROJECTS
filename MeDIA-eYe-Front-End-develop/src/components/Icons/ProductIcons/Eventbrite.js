import React from 'react';
import { useSelector } from 'react-redux';

export function Eventbrite() {
  const theme = useSelector((state) => state.app.darkTheme);
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="https://www.w3.org/2000/svg"
    >
      <path
        d="M8.79238 4.71304C11.0066 4.21224 13.2208 5.13038 14.4509 6.88318L4.66469 9.13679C4.99272 6.99447 6.57819 5.21384 8.79238 4.71304ZM14.5055 12.9763C13.7401 14.117 12.5647 14.9238 11.2253 15.2299C9.01106 15.7307 6.76954 14.8125 5.53943 13.0319L15.3529 10.7783L16.9384 10.4166L20 9.72106C19.9727 9.05332 19.8907 8.38559 19.754 7.74567C18.5239 2.37596 13.1387 -0.990537 7.75362 0.261468C2.3685 1.51347 -0.993791 6.85536 0.26365 12.2529C1.52109 17.6504 6.87888 20.9891 12.264 19.7371C15.4349 19.0137 17.8952 16.8436 19.1526 14.0892L14.5055 12.9763Z"
        fill="white"
      />
    </svg>
  );
}
export default Eventbrite;