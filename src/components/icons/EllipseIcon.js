import React from 'react';

const EllipseIcon = () => {
    return (
        <svg width="144" height="132" viewBox="0 0 144 132" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_2428_2423)">
                <path
                    d="M36.5 114.01C24.5729 103.922 17 88.8452 17 72C17 41.6243 41.6243 17 72 17C102.376 17 127 41.6243 127 72C127 88.8452 119.427 103.922 107.5 114.01"
                    stroke="#F00B34" strokeWidth="4" strokeLinecap="round"/>
            </g>
            <defs>
                <filter id="filter0_d_2428_2423" x="0" y="0" width="144" height="131.011" filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="7.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix"
                                   values="0 0 0 0 0.941176 0 0 0 0 0.0431373 0 0 0 0 0.203922 0 0 0 1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2428_2423"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2428_2423" result="shape"/>
                </filter>
            </defs>
        </svg>
    );
};

export default EllipseIcon;
