import React from 'react';

const SceneCategoryLightItem = ({strokeColor = "#C0BFBD", width = 14}) => {
    return (
        <svg width={width} height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12.9999 6.55763C13.0073 5.57242 12.7278 4.60333 12.1906 3.75099C11.6534 2.89865 10.878 2.19413 9.94488 1.71056C9.01175 1.22699 7.95492 0.982 6.88411 1.00103C5.8133 1.02006 4.76755 1.30241 3.85542 1.81877C2.94328 2.33514 2.19802 3.06669 1.697 3.93748C1.19598 4.80827 0.957467 5.78655 1.00622 6.77077C1.05497 7.75499 1.38922 8.70927 1.97425 9.53453C3.01897 11.0082 3.63748 11.55 3.63748 13.3037C3.63748 13.4664 3.70772 13.6224 3.83274 13.7374C3.95776 13.8524 4.12733 13.917 4.30414 13.917H9.69557C9.87238 13.917 10.042 13.8524 10.167 13.7374C10.292 13.6224 10.3622 13.4664 10.3622 13.3037C10.3622 11.5077 11.0541 10.9745 12.092 9.447C12.6808 8.5803 12.9952 7.57969 12.9999 6.55763Z"
                stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5.17188 17L8.83095 17" stroke={strokeColor} strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round"/>
        </svg>

    );
};

export default SceneCategoryLightItem;