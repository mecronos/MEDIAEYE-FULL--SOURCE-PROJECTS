import React from 'react';

export function Check(props) {
  return (
    <>
      {props.size === 'small' ? (
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.97003 2.53133C9.36055 2.1408 9.36055 1.50764 8.97003 1.11711C8.57951 0.726588 7.94634 0.726588 7.55582 1.11711L8.97003 2.53133ZM3.91186 6.17528L3.20475 6.88239C3.59528 7.27291 4.22844 7.27291 4.61897 6.88239L3.91186 6.17528ZM2.44343 3.29264C2.05291 2.90212 1.41975 2.90212 1.02922 3.29264C0.638697 3.68317 0.638697 4.31633 1.02922 4.70686L2.44343 3.29264ZM7.55582 1.11711L3.20475 5.46818L4.61897 6.88239L8.97003 2.53133L7.55582 1.11711ZM4.61897 5.46818L2.44343 3.29264L1.02922 4.70686L3.20475 6.88239L4.61897 5.46818Z" fill="white" />
        </svg>

      ) : (
        <svg
          width="22"
          height="16"
          viewBox="0 0 22 16"
          fill="none"
          xmlns="https://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.4568 0.0977504C20.2532 0.193146 19.2957 1.12419 13.5782 6.78577L6.93614 13.363L4.33519 10.7915C2.90467 9.37721 1.66654 8.18502 1.58378 8.14218C1.37184 8.03252 0.84752 8.03273 0.624226 8.1426C0.391688 8.25699 0.210568 8.45068 0.087915 8.71609C-0.0401117 8.99308 -0.0278163 9.32287 0.121577 9.61932C0.255493 9.88511 6.17034 15.7445 6.43865 15.8771C6.54333 15.9289 6.73928 15.9812 6.87415 15.9933C7.07814 16.0116 7.16171 15.9962 7.37164 15.9017C7.6003 15.7988 8.28842 15.1299 14.7051 8.77349C21.1217 2.41706 21.7969 1.73541 21.9008 1.50889C21.9963 1.30072 22.0117 1.21823 21.9932 1.01542C21.9414 0.449735 21.5239 0.0443883 20.9524 0.00482459C20.7383 -0.00999584 20.652 0.00618735 20.4568 0.0977504Z"
            fill="#313139"
          />
        </svg>
      )}
    </>
  );
}

export default Check;
