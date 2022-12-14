import React from 'react';

export function SearchIcon(props) {
  return (
    <>
      {props.type === 'white' ? (
        <>
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="https://www.w3.org/2000/svg"
          >
            <path
              d="M10.7922 12.2064C11.1827 12.597 11.8159 12.597 12.2064 12.2064C12.597 11.8159 12.597 11.1827 12.2064 10.7922L10.7922 12.2064ZM10.3314 8.91722C9.94091 8.52669 9.30774 8.52669 8.91722 8.91722C8.52669 9.30774 8.52669 9.94091 8.91722 10.3314L10.3314 8.91722ZM9.25 5.875C9.25 7.73896 7.73896 9.25 5.875 9.25V11.25C8.84353 11.25 11.25 8.84353 11.25 5.875H9.25ZM5.875 9.25C4.01104 9.25 2.5 7.73896 2.5 5.875H0.5C0.5 8.84353 2.90647 11.25 5.875 11.25V9.25ZM2.5 5.875C2.5 4.01104 4.01104 2.5 5.875 2.5V0.5C2.90647 0.5 0.5 2.90647 0.5 5.875H2.5ZM5.875 2.5C7.73896 2.5 9.25 4.01104 9.25 5.875H11.25C11.25 2.90647 8.84353 0.5 5.875 0.5V2.5ZM12.2064 10.7922L10.3314 8.91722L8.91722 10.3314L10.7922 12.2064L12.2064 10.7922Z"
              fill="white"
            />
          </svg>
        </>
      ) : (
        <svg
          width="25"
          height="25"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="https://www.w3.org/2000/svg"
        >
          <circle
            cx="13.2923"
            cy="13.2916"
            r="8.45833"
            stroke="#55526a"
            strokeWidth="2"
          />
          <path
            d="M13.291 9.66675C12.815 9.66675 12.3436 9.76051 11.9038 9.94268C11.464 10.1249 11.0644 10.3919 10.7278 10.7285C10.3911 11.0651 10.1241 11.4647 9.94195 11.9045C9.75978 12.3443 9.66602 12.8157 9.66602 13.2917"
            stroke="#55526a"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M24.166 24.1667L20.541 20.5417"
            stroke="#55526a"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )}
    </>
  );
}
export default SearchIcon;
