import React from 'react';
import { useSelector } from 'react-redux';

export function Google() {
    const theme = useSelector((state) => state.app.darkTheme);
    return (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_33450_165394)">
                <path d="M12.0566 2.5042C15.2629 2.5042 15.6426 2.51826 16.9035 2.57451C18.0754 2.62607 18.7082 2.82295 19.1301 2.98701C19.6879 3.20264 20.091 3.46514 20.5082 3.88232C20.9301 4.3042 21.1879 4.70264 21.4035 5.26045C21.5676 5.68232 21.7645 6.31982 21.816 7.48701C21.8723 8.75264 21.8863 9.13232 21.8863 12.3339C21.8863 15.5401 21.8723 15.9198 21.816 17.1808C21.7645 18.3526 21.5676 18.9855 21.4035 19.4073C21.1879 19.9651 20.9254 20.3683 20.5082 20.7854C20.0863 21.2073 19.6879 21.4651 19.1301 21.6808C18.7082 21.8448 18.0707 22.0417 16.9035 22.0933C15.6379 22.1495 15.2582 22.1636 12.0566 22.1636C8.85039 22.1636 8.4707 22.1495 7.20977 22.0933C6.03789 22.0417 5.40508 21.8448 4.9832 21.6808C4.42539 21.4651 4.02227 21.2026 3.60508 20.7854C3.1832 20.3636 2.92539 19.9651 2.70977 19.4073C2.5457 18.9855 2.34883 18.3479 2.29727 17.1808C2.24102 15.9151 2.22695 15.5354 2.22695 12.3339C2.22695 9.12764 2.24102 8.74795 2.29727 7.48701C2.34883 6.31514 2.5457 5.68232 2.70977 5.26045C2.92539 4.70264 3.18789 4.29951 3.60508 3.88232C4.02695 3.46045 4.42539 3.20264 4.9832 2.98701C5.40508 2.82295 6.04258 2.62607 7.20977 2.57451C8.4707 2.51826 8.85039 2.5042 12.0566 2.5042ZM12.0566 0.343262C8.79883 0.343262 8.39102 0.357324 7.11133 0.413574C5.83633 0.469824 4.95977 0.676074 4.20039 0.971387C3.4082 1.28076 2.73789 1.68857 2.07227 2.35889C1.40195 3.02451 0.994141 3.69482 0.684766 4.48232C0.389453 5.24639 0.183203 6.11826 0.126953 7.39326C0.0707031 8.67764 0.0566406 9.08545 0.0566406 12.3433C0.0566406 15.6011 0.0707031 16.0089 0.126953 17.2886C0.183203 18.5636 0.389453 19.4401 0.684766 20.1995C0.994141 20.9917 1.40195 21.662 2.07227 22.3276C2.73789 22.9933 3.4082 23.4058 4.1957 23.7104C4.95977 24.0058 5.83164 24.212 7.10664 24.2683C8.38633 24.3245 8.79414 24.3386 12.052 24.3386C15.3098 24.3386 15.7176 24.3245 16.9973 24.2683C18.2723 24.212 19.1488 24.0058 19.9082 23.7104C20.6957 23.4058 21.366 22.9933 22.0316 22.3276C22.6973 21.662 23.1098 20.9917 23.4145 20.2042C23.7098 19.4401 23.916 18.5683 23.9723 17.2933C24.0285 16.0136 24.0426 15.6058 24.0426 12.3479C24.0426 9.09014 24.0285 8.68232 23.9723 7.40264C23.916 6.12764 23.7098 5.25107 23.4145 4.4917C23.1191 3.69482 22.7113 3.02451 22.041 2.35889C21.3754 1.69326 20.7051 1.28076 19.9176 0.976074C19.1535 0.680762 18.2816 0.474512 17.0066 0.418262C15.7223 0.357324 15.3145 0.343262 12.0566 0.343262Z" fill="white" />
                <path d="M12.0566 6.1792C8.65352 6.1792 5.89258 8.94014 5.89258 12.3433C5.89258 15.7464 8.65352 18.5073 12.0566 18.5073C15.4598 18.5073 18.2207 15.7464 18.2207 12.3433C18.2207 8.94014 15.4598 6.1792 12.0566 6.1792ZM12.0566 16.3417C9.84883 16.3417 8.0582 14.5511 8.0582 12.3433C8.0582 10.1354 9.84883 8.34482 12.0566 8.34482C14.2645 8.34482 16.0551 10.1354 16.0551 12.3433C16.0551 14.5511 14.2645 16.3417 12.0566 16.3417Z" fill="white" />
                <path d="M19.9035 5.9354C19.9035 6.73228 19.2566 7.37447 18.4645 7.37447C17.6676 7.37447 17.0254 6.72759 17.0254 5.9354C17.0254 5.13853 17.6723 4.49634 18.4645 4.49634C19.2566 4.49634 19.9035 5.14321 19.9035 5.9354Z" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_33450_165394">
                    <rect width="24" height="24" fill="white" transform="translate(0.0566406 0.343262)" />
                </clipPath>
            </defs>
        </svg>
    );
}
export default Google;
