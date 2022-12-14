import React from 'react';
import { useSelector } from 'react-redux';

export function VK() {
    const theme = useSelector((state) => state.app.darkTheme);
    return (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_33450_165456)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.74371 2.03033C0.0566406 3.71739 0.0566406 6.43266 0.0566406 11.8633V12.8233C0.0566406 18.2539 0.0566406 20.9691 1.74371 22.6562C3.43077 24.3433 6.14604 24.3433 11.5766 24.3433H12.5366C17.9672 24.3433 20.6825 24.3433 22.3696 22.6562C24.0566 20.9691 24.0566 18.2539 24.0566 12.8233V11.8633C24.0566 6.43266 24.0566 3.71739 22.3696 2.03033C20.6825 0.343262 17.9672 0.343262 12.5366 0.343262H11.5766C6.14604 0.343262 3.43077 0.343262 1.74371 2.03033ZM4.1067 7.64331C4.2367 13.8833 7.35669 17.6333 12.8267 17.6333H13.1367V14.0633C15.1467 14.2633 16.6666 15.7333 17.2766 17.6333H20.1167C19.3367 14.7933 17.2866 13.2233 16.0066 12.6233C17.2866 11.8833 19.0866 10.0833 19.5166 7.64331H16.9365C16.3765 9.62331 14.7167 11.4233 13.1367 11.5933V7.64331H10.5566V14.5633C8.95664 14.1633 6.93669 12.2233 6.84669 7.64331H4.1067Z" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_33450_165456">
                    <rect width="24" height="24" fill="white" transform="translate(0.0566406 0.343262)" />
                </clipPath>
            </defs>
        </svg>
    );
}
export default VK;