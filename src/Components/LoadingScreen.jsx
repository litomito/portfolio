import React, { useEffect } from "react";
import Header from "./Header";

const LoadingScreen = () => {
	useEffect(() => {
        const loaderContainer = document.querySelector(".loading-container");
        const pageContent = document.querySelector(".page-content");

        const handleLoad = () => {
            loaderContainer.classList.add("hidden");
            pageContent.classList.add("visible");
            document.body.style.overflow = "auto";
        };

        window.addEventListener("load", handleLoad);

        return () => {
            window.removeEventListener("load", handleLoad);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

	return (
		<>
			<div className="loading-container">
				<svg className="loading-svg" viewBox="0 0 450 160">
					<title>loading</title>
					<text
						x={"50%"}
						y={"50%"}
						dy={".32rem"}
						textAnchor="middle"
						className="loading-text"
					>
						Linus Toma
					</text>
				</svg>
			</div>
			<div className="page-content">
				<Header />
			</div>
		</>
	);
};

export default LoadingScreen;
