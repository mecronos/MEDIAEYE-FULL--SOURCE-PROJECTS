import React from 'react';
import { useSelector } from 'react-redux';

export function Burn(props) {
  const { type } = props;
  return (
    <>
      {type === 'red' ? (
        <svg
          width="11"
          height="14"
          viewBox="0 0 11 14"
          fill="none"
          xmlns="https://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.10651 0.055118C5.07298 0.0851856 4.99637 0.236399 4.93621 0.391113C4.87605 0.545826 4.73516 0.864287 4.62314 1.0988C3.95892 2.48934 3.13369 3.58053 2.02587 4.53313C1.53539 4.95489 1.20637 5.29366 0.964383 5.62619C0.58864 6.14247 0.277148 6.81317 0.128851 7.42515C0.0175163 7.8846 -0.0145494 8.21788 0.00569321 8.70503C0.113206 11.2924 1.83655 13.4043 4.25378 13.9108C4.66407 13.9967 5.45094 14.0271 5.86902 13.973C8.33178 13.6545 10.2088 11.6488 10.4773 9.04883C10.5393 8.44851 10.4717 7.58902 10.3066 6.87909C10.0099 5.60322 9.34732 4.46724 8.52313 3.82138C8.40359 3.72768 8.28216 3.73115 8.1868 3.83098C8.09649 3.92553 8.10055 3.99554 8.21597 4.33472C8.41711 4.92591 8.37084 5.66413 8.09717 6.22945L8.0188 6.39135L7.86166 5.7354C7.46834 4.09365 6.94564 2.70126 6.21329 1.3444C5.97817 0.908794 5.56081 0.241275 5.43649 0.102001C5.33253 -0.0144876 5.20429 -0.0327094 5.10651 0.055118ZM5.33181 7.02111C5.36838 7.0314 5.50387 7.17536 5.63291 7.34107C6.80313 8.84392 7.45592 10.3489 7.39041 11.393C7.35473 11.9612 7.15502 12.4154 6.7582 12.8308C6.48537 13.1164 6.23527 13.2807 5.89227 13.3995C5.68137 13.4726 5.60625 13.4823 5.25036 13.4823C4.89447 13.4823 4.81935 13.4726 4.60845 13.3995C4.26716 13.2813 4.01744 13.1172 3.74273 12.8307C3.34633 12.4173 3.14602 11.9619 3.11031 11.393C3.04555 10.361 3.66525 8.91134 4.80959 7.41803C5.12117 7.01139 5.16864 6.97536 5.33181 7.02111Z"
            fill="url(#paint0_linear_4980_1785)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_4980_1785"
              x1="5.25"
              y1="0"
              x2="5.25"
              y2="14"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF0000" />
              <stop offset="1" stopColor="#FF6C6C" />
            </linearGradient>
          </defs>
        </svg>
      ) : (
        <svg
          width="11"
          height="15"
          viewBox="0 0 11 15"
          fill="none"
          xmlns="https://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.10651 0.0568808C5.07298 0.08791 4.99637 0.243959 4.93621 0.403621C4.87605 0.563283 4.73516 0.891929 4.62314 1.13394C3.95892 2.56896 3.13369 3.69504 2.02587 4.67811C1.53539 5.11336 1.20637 5.46297 0.964383 5.80613C0.58864 6.33892 0.277148 7.03107 0.128851 7.66263C0.0175163 8.13677 -0.0145494 8.48071 0.00569321 8.98343C0.113206 11.6536 1.83655 13.833 4.25378 14.3557C4.66407 14.4444 5.45094 14.4757 5.86902 14.4199C8.33178 14.0912 10.2088 12.0213 10.4773 9.33824C10.5393 8.71872 10.4717 7.83174 10.3066 7.0991C10.0099 5.78242 9.34732 4.61012 8.52313 3.9436C8.40359 3.8469 8.28216 3.85048 8.1868 3.9535C8.09649 4.05107 8.10055 4.12332 8.21597 4.47336C8.41711 5.08346 8.37084 5.84529 8.09717 6.42868L8.0188 6.59576L7.86166 5.91883C7.46834 4.22457 6.94564 2.78765 6.21329 1.3874C5.97817 0.93786 5.56081 0.248991 5.43649 0.105263C5.33253 -0.0149509 5.20429 -0.0337556 5.10651 0.0568808ZM5.33181 7.24567C5.36838 7.25628 5.50387 7.40484 5.63291 7.57586C6.80313 9.12677 7.45592 10.6799 7.39041 11.7574C7.35473 12.3437 7.15502 12.8125 6.7582 13.2412C6.48537 13.5359 6.23527 13.7055 5.89227 13.8281C5.68137 13.9035 5.60625 13.9135 5.25036 13.9135C4.89447 13.9135 4.81935 13.9035 4.60845 13.8281C4.26716 13.7061 4.01744 13.5367 3.74273 13.2411C3.34633 12.8144 3.14602 12.3445 3.11031 11.7574C3.04555 10.6923 3.66525 9.19635 4.80959 7.65527C5.12117 7.23564 5.16864 7.19845 5.33181 7.24567Z"
          />
        </svg>
      )}
    </>
  );
}
export default Burn;