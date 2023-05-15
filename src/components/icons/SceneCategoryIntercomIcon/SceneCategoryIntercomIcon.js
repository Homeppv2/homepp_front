import React from 'react';

const SceneCategoryIntercomIcon = ({strokeColor = "#C0BFBD", fillColor = "#C0BFBD", width = 17}) => {
    return (
        <svg width={width} height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="4.8125" y1="4.6875" x2="12.1875" y2="4.6875" stroke={strokeColor} strokeWidth="2"
                  strokeLinecap="round"/>
            <circle cx="12.25" cy="10.375" r="0.9375" fill={fillColor}/>
            <circle cx="8.5" cy="7.5625" r="0.9375" fill={fillColor}/>
            <circle cx="12.25" cy="7.5625" r="0.9375" fill={fillColor}/>
            <circle cx="4.75" cy="10.375" r="0.9375" fill={fillColor}/>
            <circle cx="8.5" cy="10.375" r="0.9375" fill={fillColor}/>
            <circle cx="4.75" cy="7.5625" r="0.9375" fill={fillColor}/>
            <circle cx="4.75" cy="13.1875" r="0.9375" fill={fillColor}/>
            <circle cx="8.5" cy="13.1875" r="0.9375" fill={fillColor}/>
            <circle cx="12.25" cy="13.1875" r="0.9375" fill={fillColor}/>
            <path
                d="M1.07096 10.4293C1.23769 12.8573 1.32105 14.0713 2.11171 14.8651C2.90236 15.6589 4.11732 15.7472 6.54725 15.9238C7.19133 15.9706 7.84258 16 8.5 16C9.15742 16 9.80867 15.9706 10.4527 15.9238C12.8827 15.7472 14.0976 15.6589 14.8883 14.8651C15.6789 14.0713 15.7623 12.8573 15.929 10.4293C15.9727 9.79292 16 9.14948 16 8.5C16 7.85052 15.9727 7.20708 15.929 6.57065C15.7623 4.1427 15.6789 2.92873 14.8883 2.13492C14.0976 1.34111 12.8827 1.25282 10.4528 1.07623C9.80867 1.02942 9.15742 1 8.5 1C7.84258 1 7.19133 1.02942 6.54725 1.07623C4.11732 1.25282 2.90236 1.34111 2.11171 2.13492C1.32105 2.92873 1.23769 4.1427 1.07096 6.57065C1.02726 7.20708 1 7.85052 1 8.5C1 9.14948 1.02726 9.79292 1.07096 10.4293Z"
                stroke={strokeColor} strokeWidth="1.6"/>
        </svg>

    );
};

export default SceneCategoryIntercomIcon;