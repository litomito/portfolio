import React, { useState, useEffect } from 'react';
import Header from './Header';

const LoadingScreen = () => {

    useEffect(() => {
        const loaderContainer = document.querySelector(".loading-container");
        const pageContent = document.querySelector(".page-content");

        window.addEventListener("load", () => {
            loaderContainer.classList.add("hidden");
            pageContent.classList.add("visible");
        })
    })

    return (
        <>
            <div className='loading-container'>
                <svg className='loading-svg' viewBox='0 0 450 160'>
                    <text x={("50%")} y={("50%")} dy={(".32rem")} textAnchor='middle' className='loading-text'>
                        Linus Toma
                    </text>
                </svg>
            </div>
            <div className='page-content'>
                <Header />
            </div>
        </>
    );
};


export default LoadingScreen;