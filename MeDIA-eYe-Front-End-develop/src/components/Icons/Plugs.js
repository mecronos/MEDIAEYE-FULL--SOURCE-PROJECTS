import React from 'react';
import { useSelector } from 'react-redux';

export function ExploreBlockPlug() {
  const darkTheme = useSelector((state) => state.app.darkTheme);
  return (
    <div className="explore_block_wrapper">
      <svg
        width="100%"
        height="345"
        viewBox="0 0 302 345"
        fill="none"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          d="M0.5 14C0.5 6.54416 6.54416 0.5 14 0.5H288C295.456 0.5 301.5 6.54416 301.5 14V331C301.5 338.456 295.456 344.5 288 344.5H14C6.54416 344.5 0.5 338.456 0.5 331V14Z"
          stroke="#454545"
        />
        <path
          d="M7 328V284C7 278.477 11.4771 274 17 274H285C290.523 274 295 278.477 295 284V321.324V328C295 333.523 290.523 338 285 338H276.816H17C11.4772 338 7 333.523 7 328Z"
          fill="#282550"
        />
        <rect x="23" y="284" width="156" height="9" rx="4.5" fill="#3F3B6D" />
        <rect x="23" y="301" width="127" height="9" rx="4.5" fill="#3F3B6D" />
        <rect x="23" y="318" width="94" height="9" rx="4.5" fill="#3F3B6D" />
        <g clipPath="url(#clip0_2601_1554)">
          <path
            d="M192.438 122.721C192.406 122.684 192.375 122.647 192.344 122.609C191.59 121.68 190.617 121.497 190.105 121.471C189.592 121.444 188.605 121.527 187.761 122.373L141.019 169.188C139.276 170.933 136.491 171.062 134.594 169.487L114.922 153.151C113.764 152.19 112.093 152.2 110.947 153.175C110.933 153.188 110.919 153.2 110.903 153.212L70 187.182V197.3C70 208.715 79.2862 218.001 90.7009 218.001H211.299C222.714 218.001 232 208.715 232 197.3V168.483L192.438 122.721Z"
            fill="#3F3B6D"
          />
          <path
            d="M120.997 85.4727C113.572 85.4727 107.531 91.5132 107.531 98.9377C107.531 106.362 113.572 112.403 120.997 112.403C128.421 112.403 134.462 106.362 134.462 98.9377C134.462 91.5129 128.421 85.4727 120.997 85.4727Z"
            fill="#3F3B6D"
          />
          <path
            d="M211.299 56H90.7009C79.2869 56 70 65.2862 70 76.7009V174.777L104.787 145.886C109.472 141.92 116.293 141.885 121.018 145.809L137.341 159.363L181.008 115.63C183.532 113.102 187.029 111.758 190.593 111.94C194.134 112.121 197.448 113.793 199.699 116.528L232 153.891V76.7009C232 65.2862 222.713 56 211.299 56ZM120.997 121.946C108.31 121.946 97.9893 111.625 97.9893 98.9389C97.9893 86.2529 108.311 75.9321 120.997 75.9321C133.683 75.9321 144.003 86.2532 144.003 98.9389C144.003 111.625 133.683 121.946 120.997 121.946Z"
            fill="#3F3B6D"
          />
        </g>
        <defs>
          <clipPath id="clip0_2601_1554">
            <rect
              width="162"
              height="162"
              fill="white"
              transform="translate(70 56)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export function CollectionBlockPlug() {
  const darkTheme = useSelector((state) => state.app.darkTheme);
  return (
    <div className="collection_block_single_wrapper">
      <svg
        width="100%"
        height="294"
        viewBox="0 0 302 294"
        fill="none"
        xmlns="https://www.w3.org/2000/svg"
      >
        <rect
          x="7.5"
          y="13.5"
          width="287"
          height="178"
          rx="9.5"
          stroke="#454545"
        />
        <rect
          x="7.5"
          y="10.5"
          width="287"
          height="181"
          rx="9.5"
          stroke="#454545"
        />
        <rect
          x="7.5"
          y="7.5"
          width="287"
          height="184"
          rx="9.5"
          fill="#282550"
          stroke="#454545"
        />
        <rect
          x="0.5"
          y="0.5"
          width="301"
          height="293"
          rx="13.5"
          stroke="#454545"
        />
        <rect
          x="115.5"
          y="148.5"
          width="71"
          height="71"
          rx="4.5"
          fill="#27244B"
          stroke="#3F3B6D"
        />
        <rect x="74" y="233" width="149" height="9" rx="4.5" fill="#3F3B6D" />
        <rect x="116" y="252" width="64" height="9" rx="4.5" fill="#3F3B6D" />
        <rect x="148" y="270" width="58" height="9" rx="4.5" fill="#3F3B6D" />
        <rect x="95" y="270" width="42" height="9" rx="4.5" fill="#3F3B6D" />
        <g clipPath="url(#clip0_2613_1555)">
          <path
            d="M174.941 70.2039C174.922 70.1822 174.904 70.1603 174.886 70.1378C174.443 69.5923 173.871 69.4848 173.57 69.4692C173.269 69.4534 172.689 69.5023 172.193 69.9994L144.729 97.5062C143.705 98.5315 142.068 98.6076 140.954 97.6821L129.395 88.0838C128.715 87.5188 127.732 87.525 127.06 88.0978C127.051 88.105 127.043 88.1121 127.034 88.1193L103 108.079V114.024C103 120.731 108.456 126.188 115.163 126.188H186.023C192.73 126.188 198.187 120.731 198.187 114.024V97.0922L174.941 70.2039Z"
            fill="#3F3B6D"
          />
          <path
            d="M132.965 48.3184C128.602 48.3184 125.053 51.8676 125.053 56.23C125.053 60.5924 128.602 64.1417 132.965 64.1417C137.327 64.1417 140.876 60.5924 140.876 56.23C140.876 51.8674 137.327 48.3184 132.965 48.3184Z"
            fill="#3F3B6D"
          />
          <path
            d="M186.024 31H115.163C108.457 31 103 36.4563 103 43.1633V100.79L123.44 83.8146C126.192 81.4842 130.2 81.4635 132.977 83.769L142.568 91.7335L168.225 66.0368C169.708 64.5515 171.763 63.7619 173.857 63.8686C175.937 63.9754 177.885 64.9573 179.207 66.5646L198.186 88.5178V43.1633C198.187 36.4563 192.73 31 186.024 31ZM132.964 69.7479C125.51 69.7479 119.446 63.6837 119.446 56.2297C119.446 48.7758 125.51 42.7115 132.964 42.7115C140.418 42.7115 146.482 48.776 146.482 56.2297C146.482 63.6837 140.418 69.7479 132.964 69.7479Z"
            fill="#3F3B6D"
          />
        </g>
        <g clipPath="url(#clip1_2613_1555)">
          <path
            d="M161.476 180.064C161.468 180.055 161.461 180.046 161.453 180.037C161.272 179.813 161.037 179.769 160.914 179.763C160.791 179.756 160.553 179.776 160.35 179.98L149.097 191.25C148.678 191.67 148.007 191.701 147.551 191.322L142.815 187.39C142.536 187.158 142.133 187.161 141.858 187.395C141.854 187.398 141.851 187.401 141.847 187.404L132 195.582V198.018C132 200.766 134.236 203.002 136.984 203.002H166.016C168.764 203.002 171 200.766 171 198.018V191.08L161.476 180.064Z"
            fill="#3F3B6D"
          />
          <path
            d="M144.277 171.096C142.489 171.096 141.035 172.55 141.035 174.337C141.035 176.125 142.489 177.579 144.277 177.579C146.064 177.579 147.518 176.125 147.518 174.337C147.518 172.55 146.064 171.096 144.277 171.096Z"
            fill="#3F3B6D"
          />
          <path
            d="M166.017 164H136.984C134.236 164 132 166.236 132 168.984V192.594L140.375 185.639C141.502 184.684 143.144 184.676 144.282 185.621L148.212 188.884L158.724 178.355C159.332 177.747 160.174 177.423 161.032 177.467C161.884 177.511 162.682 177.913 163.224 178.572L171 187.566V168.984C171 166.236 168.764 164 166.017 164ZM144.277 179.876C141.223 179.876 138.738 177.391 138.738 174.337C138.738 171.283 141.223 168.798 144.277 168.798C147.331 168.798 149.816 171.283 149.816 174.337C149.816 177.391 147.331 179.876 144.277 179.876Z"
            fill="#3F3B6D"
          />
        </g>
        <defs>
          <clipPath id="clip0_2613_1555">
            <rect
              width="95.1867"
              height="95.1867"
              fill="white"
              transform="translate(103 31)"
            />
          </clipPath>
          <clipPath id="clip1_2613_1555">
            <rect
              width="39"
              height="39"
              fill="white"
              transform="translate(132 164)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export function ProductImagePlug() {
  return (
    <svg
      width="100%"
      height="550"
      viewBox="0 0 521 648"
      fill="none"
      xmlns="https://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 14C0.5 6.54417 6.54416 0.5 14 0.5H507C514.456 0.5 520.5 6.54416 520.5 14V634C520.5 641.456 514.456 647.5 507 647.5H14C6.54415 647.5 0.5 641.456 0.5 634V14Z"
        stroke="#454545"
      />
      <path
        d="M347.725 294.031C347.657 293.954 347.592 293.875 347.527 293.795C345.94 291.847 343.892 291.463 342.813 291.407C341.734 291.351 339.657 291.525 337.879 293.301L239.49 391.553C235.822 395.216 229.96 395.487 225.967 392.181L184.558 357.897C182.121 355.879 178.602 355.901 176.192 357.947C176.161 357.973 176.131 357.998 176.099 358.024L90 429.32V450.555C90 474.512 109.547 494.002 133.574 494.002H387.426C411.453 494.002 431 474.511 431 450.555V390.074L347.725 294.031Z"
        fill="#3F3B6D"
      />
      <path
        d="M387.426 154H133.574C109.548 154 90 173.49 90 197.446V403.285L163.225 342.65C173.086 334.326 187.443 334.252 197.389 342.487L231.749 370.936L323.664 279.149C328.978 273.844 336.339 271.023 343.841 271.404C351.294 271.786 358.27 275.293 363.008 281.034L430.999 359.449V197.446C431.001 173.49 411.452 154 387.426 154ZM197.345 292.405C170.641 292.405 148.916 270.744 148.916 244.119C148.916 217.494 170.642 195.833 197.345 195.833C224.049 195.833 245.773 217.494 245.773 244.119C245.773 270.744 224.049 292.405 197.345 292.405Z"
        fill="#3F3B6D"
      />
    </svg>
  );
}

export function ImagePlug() {
  return (
    <div className="mediaeyeempty-image">
      <svg
        className="mediaeyeempty-image-icon"
        width="47"
        height="64"
        viewBox="0 0 47 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.3">
          <path
            d="M33.4884 44.6358C30.5418 41.6893 26.5455 40.0339 22.3784 40.0339C18.2114 40.0339 14.7537 41.1506 11.8071 44.0972"
            stroke="white"
            strokeWidth="2"
          />
          <ellipse
            cx="13.5395"
            cy="34.4615"
            rx="3.69231"
            ry="2.46154"
            fill="white"
          />
          <circle cx="31.9996" cy="34.4615" r="2.46154" fill="white" />
          <path
            d="M45.2001 13.8225L45.2004 13.8229C45.5086 14.1391 45.7038 14.5555 45.7555 15H32.1795V1.01743C32.593 1.07389 32.9778 1.26612 33.2767 1.57286L45.2001 13.8225ZM26.2821 1V17C26.2821 19.1776 28.0208 21 30.2051 21H45.7692V61C45.7692 62.1349 44.8894 63 43.8461 63H2.92308C1.87982 63 1 62.1349 1 61V3C1 1.86514 1.87982 1 2.92308 1H26.2821Z"
            stroke="white"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}