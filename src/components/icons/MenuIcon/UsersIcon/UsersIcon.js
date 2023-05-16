import React from 'react';

const UsersIcon = ({strokeColor = "#C0BFBD", width = 25}) => {
    return (
        <svg width={width} height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12.5498 12.5C15.5416 12.5 17.9668 9.9256 17.9668 6.74998C17.9668 3.57435 15.5416 1 12.5498 1C9.55809 1 7.13281 3.57435 7.13281 6.74998C7.13281 9.9256 9.55809 12.5 12.5498 12.5Z"
                stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path
                d="M22.7672 19.1118C25.2468 20.7583 23.6917 23.9994 20.71 23.9994H4.29001C1.30832 23.9994 -0.246789 20.7583 2.23277 19.1118C5.17083 17.1609 8.70182 16.0234 12.5 16.0234C16.2982 16.0234 19.8292 17.1609 22.7672 19.1118Z"
                stroke={strokeColor} strokeWidth="2"/>
        </svg>
    );
};

export default UsersIcon;