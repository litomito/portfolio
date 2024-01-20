import React, { useEffect } from 'react';


const ScrollDownLine = () => {
    useEffect(() => {
        const path = document.querySelector('path');
        const pathLength = path.getTotalLength();

        path.style.strokeDasharray = pathLength + ' ' + pathLength;
        path.style.strokeDashoffset = pathLength;
        
        window.addEventListener('scroll', () => {
            var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
            var drawLength = pathLength * scrollPercentage;
            path.style.strokeDashoffset = pathLength - drawLength

            const target = document.querySelectorAll('.html-icon');

            var index = 0, length = target.length;
            for (index; index < length; index++) {
                var pos = window.scrollY * target[index].dataset.rate;

                if (target[index].dataset.direction === 'vertical') {
                    target[index].style.transform = 'translate3d(0px, '+pos+'px, 0px)';
                } else {
                    var posX = window.scrollY * target[index].dataset.ratex;
                    var posY = window.scrollY * target[index].dataset.ratey;
                    target[index].style.transform = 'translate3d('+posX+'px, '+posY+'px, 0px)';
                }
            }

        })
    })
    return (
        <div className='scroll-line-div'>
            <div className='scroll-line-text'>Scroll</div>
            <div className='line-container'>
                <svg className='scroll-line-line' width="257" height="2270" viewBox="0 0 257 2270" fill="none" preserveAspectRatio='xMidYmax meet'>
                    <path d="M128.5 0V366.736V407.617V451.642V460.028V650.805C128.5 650.805 415.375 745.145 128.5 844.726C-158.375 944.307 128.5 1033.41 128.5 1033.41C128.5 1033.41 415.375 1130.89 128.5 1221.04C-158.375 1311.19 128.5 1412.86 128.5 1412.86C128.5 1412.86 413.024 1503.01 128.5 1600.49C-156.024 1697.98 128.5 1790.22 128.5 1790.22V2270" stroke="#727272" stroke-width="2"/>
                </svg>
            </div>
        </div>
    );
};


export default ScrollDownLine;