import React from 'react';

export function CohortLoading() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="https://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        top: '50%',
        right: '30px',
        transform: 'translateY(-50%)'
      }}
    >
      <path
        d="M10 8.74228e-07C8.13795 9.55621e-07 6.31288 0.519897 4.73034 1.50114C3.14781 2.48237 1.87067 3.88597 1.04278 5.55386C0.214883 7.22174 -0.130887 9.08765 0.0444122 10.9414C0.219711 12.7952 0.909116 14.5632 2.03498 16.0464C3.16084 17.5295 4.67845 18.6688 6.41686 19.336C8.15528 20.0032 10.0454 20.1718 11.8745 19.8227C13.7035 19.4737 15.3988 18.6209 16.7694 17.3604C18.1399 16.0999 19.1313 14.4818 19.6319 12.6883L15.5714 11.555C15.2819 12.5925 14.7084 13.5284 13.9157 14.2575C13.1229 14.9867 12.1423 15.48 11.0843 15.6818C10.0263 15.8837 8.93294 15.7862 7.92738 15.4003C6.92181 15.0144 6.04397 14.3553 5.39273 13.4974C4.74149 12.6395 4.34271 11.6169 4.24131 10.5446C4.13991 9.47226 4.33992 8.39295 4.8188 7.42818C5.29769 6.46342 6.03643 5.65152 6.95183 5.08393C7.86723 4.51635 8.92292 4.21562 10 4.21562L10 8.74228e-07Z"
        fill="white"
      />
    </svg>
  );
}
export default CohortLoading;