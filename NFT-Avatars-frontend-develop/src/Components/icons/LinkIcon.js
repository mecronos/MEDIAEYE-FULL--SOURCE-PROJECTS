import React from "react";

export function LinkIcon(props) {
  return (
    <>
      {props.angle === "straight" ? (
        <svg
          width="19"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.02734 9H12.0273"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.2773 5C10.7251 5 10.2773 5.44772 10.2773 6C10.2773 6.55228 10.7251 7 11.2773 7V5ZM11.2773 11C10.7251 11 10.2773 11.4477 10.2773 12C10.2773 12.5523 10.7251 13 11.2773 13V11ZM11.2773 7H12.7773V5H11.2773V7ZM12.7773 11H11.2773V13H12.7773V11ZM14.7773 9C14.7773 10.1046 13.8819 11 12.7773 11V13C14.9865 13 16.7773 11.2091 16.7773 9H14.7773ZM12.7773 7C13.8819 7 14.7773 7.89543 14.7773 9H16.7773C16.7773 6.79086 14.9865 5 12.7773 5V7Z"
            fill="white"
          />
          <path
            d="M6.77734 7C7.32963 7 7.77734 6.55228 7.77734 6C7.77734 5.44772 7.32963 5 6.77734 5V7ZM6.77734 13C7.32963 13 7.77734 12.5523 7.77734 12C7.77734 11.4477 7.32963 11 6.77734 11V13ZM6.77734 5H5.27734V7H6.77734V5ZM5.27734 13H6.77734V11H5.27734V13ZM1.27734 9C1.27734 11.2091 3.0682 13 5.27734 13V11C4.17277 11 3.27734 10.1046 3.27734 9H1.27734ZM5.27734 5C3.0682 5 1.27734 6.79086 1.27734 9H3.27734C3.27734 7.89543 4.17277 7 5.27734 7V5Z"
            fill="white"
          />
        </svg>
      ) : (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.44104 11.7233L12.0979 6.06641"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.02641 8.89461C5.41694 8.50408 5.41694 7.87092 5.02641 7.48039C4.63589 7.08987 4.00272 7.08987 3.6122 7.48039L5.02641 8.89461ZM10.6833 14.5515C11.0738 14.1609 11.0738 13.5278 10.6833 13.1372C10.2927 12.7467 9.65958 12.7467 9.26905 13.1372L10.6833 14.5515ZM3.6122 7.48039L2.19799 8.89461L3.6122 10.3088L5.02641 8.89461L3.6122 7.48039ZM9.26905 15.9657L10.6833 14.5515L9.26905 13.1372L7.85484 14.5515L9.26905 15.9657ZM2.19799 15.9657C4.15061 17.9183 7.31643 17.9183 9.26905 15.9657L7.85484 14.5515C6.68327 15.723 4.78377 15.723 3.6122 14.5515L2.19799 15.9657ZM2.19799 8.89461C0.245365 10.8472 0.245365 14.0131 2.19799 15.9657L3.6122 14.5515C2.44063 13.3799 2.44063 11.4804 3.6122 10.3088L2.19799 8.89461Z"
            fill="white"
          />
          <path
            d="M7.85503 3.23757C7.4645 3.62809 7.4645 4.26126 7.85503 4.65178C8.24555 5.0423 8.87872 5.0423 9.26924 4.65178L7.85503 3.23757ZM13.5119 8.89442C13.1214 9.28494 13.1214 9.91811 13.5119 10.3086C13.9024 10.6992 14.5356 10.6992 14.9261 10.3086L13.5119 8.89442ZM9.26924 4.65178L10.6835 3.23757L9.26924 1.82335L7.85503 3.23757L9.26924 4.65178ZM14.9261 7.48021L13.5119 8.89442L14.9261 10.3086L16.3403 8.89442L14.9261 7.48021ZM14.9261 3.23757C16.0977 4.40914 16.0977 6.30863 14.9261 7.48021L16.3403 8.89442C18.2929 6.9418 18.2929 3.77597 16.3403 1.82335L14.9261 3.23757ZM10.6835 3.23757C11.855 2.06599 13.7545 2.06599 14.9261 3.23757L16.3403 1.82335C14.3877 -0.129269 11.2219 -0.129269 9.26924 1.82335L10.6835 3.23757Z"
            fill="white"
          />
        </svg>
      )}
    </>
  );
}
export default LinkIcon;
