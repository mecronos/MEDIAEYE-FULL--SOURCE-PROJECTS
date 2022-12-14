import React from 'react';
import { useSelector } from 'react-redux';

export function MenuIcon(props) {
    return (
        <>
            {
                props.type === 'small' ? (

                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5283 15.7344C14.5283 15.1821 14.976 14.7344 15.5283 14.7344C16.0806 14.7344 16.5283 15.1821 16.5283 15.7344C16.5283 16.2867 16.0806 16.7344 15.5283 16.7344C14.976 16.7344 14.5283 16.2867 14.5283 15.7344Z" stroke="white" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.52832 15.7344C8.52832 15.1821 8.97604 14.7344 9.52832 14.7344C10.0806 14.7344 10.5283 15.1821 10.5283 15.7344C10.5283 16.2867 10.0806 16.7344 9.52832 16.7344C8.97604 16.7344 8.52832 16.2867 8.52832 15.7344Z" stroke="white" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M14.5283 9.73438C14.5283 9.18209 14.976 8.73438 15.5283 8.73438C16.0806 8.73438 16.5283 9.18209 16.5283 9.73438C16.5283 10.2867 16.0806 10.7344 15.5283 10.7344C14.976 10.7344 14.5283 10.2867 14.5283 9.73438Z" stroke="white" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.52832 9.73438C8.52832 9.18209 8.97604 8.73438 9.52832 8.73438C10.0806 8.73438 10.5283 9.18209 10.5283 9.73438C10.5283 10.2867 10.0806 10.7344 9.52832 10.7344C8.97604 10.7344 8.52832 10.2867 8.52832 9.73438Z" stroke="white" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                ) : (
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5283 18.7344C17.5283 18.1821 17.976 17.7344 18.5283 17.7344C19.0806 17.7344 19.5283 18.1821 19.5283 18.7344C19.5283 19.2867 19.0806 19.7344 18.5283 19.7344C17.976 19.7344 17.5283 19.2867 17.5283 18.7344Z" stroke="white" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.5283 18.7344C11.5283 18.1821 11.976 17.7344 12.5283 17.7344C13.0806 17.7344 13.5283 18.1821 13.5283 18.7344C13.5283 19.2867 13.0806 19.7344 12.5283 19.7344C11.976 19.7344 11.5283 19.2867 11.5283 18.7344Z" stroke="white" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5.52832 18.7344C5.52832 18.1821 5.97604 17.7344 6.52832 17.7344C7.08061 17.7344 7.52832 18.1821 7.52832 18.7344C7.52832 19.2867 7.08061 19.7344 6.52832 19.7344C5.97604 19.7344 5.52832 19.2867 5.52832 18.7344Z" stroke="white" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M17.5283 12.7344C17.5283 12.1821 17.976 11.7344 18.5283 11.7344C19.0806 11.7344 19.5283 12.1821 19.5283 12.7344C19.5283 13.2867 19.0806 13.7344 18.5283 13.7344C17.976 13.7344 17.5283 13.2867 17.5283 12.7344Z" stroke="white" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.5283 12.7344C11.5283 12.1821 11.976 11.7344 12.5283 11.7344C13.0806 11.7344 13.5283 12.1821 13.5283 12.7344C13.5283 13.2867 13.0806 13.7344 12.5283 13.7344C11.976 13.7344 11.5283 13.2867 11.5283 12.7344Z" stroke="white" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5.52832 12.7344C5.52832 12.1821 5.97604 11.7344 6.52832 11.7344C7.08061 11.7344 7.52832 12.1821 7.52832 12.7344C7.52832 13.2867 7.08061 13.7344 6.52832 13.7344C5.97604 13.7344 5.52832 13.2867 5.52832 12.7344Z" stroke="white" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M17.5283 6.73438C17.5283 6.18209 17.976 5.73438 18.5283 5.73438C19.0806 5.73438 19.5283 6.18209 19.5283 6.73438C19.5283 7.28666 19.0806 7.73438 18.5283 7.73438C17.976 7.73438 17.5283 7.28666 17.5283 6.73438Z" stroke="white" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.5283 6.73438C11.5283 6.18209 11.976 5.73438 12.5283 5.73438C13.0806 5.73438 13.5283 6.18209 13.5283 6.73438C13.5283 7.28666 13.0806 7.73438 12.5283 7.73438C11.976 7.73438 11.5283 7.28666 11.5283 6.73438Z" stroke="white" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5.52832 6.73438C5.52832 6.18209 5.97604 5.73438 6.52832 5.73438C7.08061 5.73438 7.52832 6.18209 7.52832 6.73438C7.52832 7.28666 7.08061 7.73438 6.52832 7.73438C5.97604 7.73438 5.52832 7.28666 5.52832 6.73438Z" stroke="white" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                )
            }

        </>
    );
}
