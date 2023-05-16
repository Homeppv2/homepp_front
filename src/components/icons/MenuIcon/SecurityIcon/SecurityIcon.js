import React from 'react';

const SecurityIcon = ({strokeColor = "#C0BFBD", fillColor = "#C0BFBD", width = 24}) => {
    return (
        <svg width={width} height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M19.6462 24.5002H3.70235C2.17102 24.5002 1 23.3252 1 21.7886V11.8463C1 10.3098 2.17102 9.13477 3.70235 9.13477H19.6462C21.1775 9.13477 22.3485 10.3098 22.3485 11.8463V21.6982C22.3485 23.2348 21.0874 24.5002 19.6462 24.5002Z"
                stroke={strokeColor} strokeWidth="2" strokeMiterlimit="10"/>
            <path
                d="M18.8361 9.13461H4.51367V8.14038C4.51367 4.16346 7.75649 1 11.6299 1C15.5933 1 18.746 4.25385 18.746 8.14038V9.13461H18.8361Z"
                stroke={strokeColor} strokeWidth="2" strokeMiterlimit="10"/>
            <path
                d="M11.6304 16.3647C12.7746 16.3647 13.7022 15.434 13.7022 14.2859C13.7022 13.1378 12.7746 12.207 11.6304 12.207C10.4862 12.207 9.55859 13.1378 9.55859 14.2859C9.55859 15.434 10.4862 16.3647 11.6304 16.3647Z"
                fill={fillColor}/>
            <path
                d="M12.8903 20.9743H10.4582C9.73752 20.9743 9.19705 20.2512 9.46729 19.6185L10.9085 14.8281H12.4399L13.8811 19.6185C14.1514 20.3416 13.6109 20.9743 12.8903 20.9743Z"
                fill={fillColor}/>
        </svg>
    );
};

export default SecurityIcon;