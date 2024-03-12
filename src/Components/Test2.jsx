import React, { useState, useEffect } from "react";
import ScrollDownLine from "./ScrollDownLine";

const Test2 = () => {
	const [scrollPercentWidths, setScrollPercentWidths] = useState({});
	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const viewportHeight = window.innerHeight;
			const documentHeight = document.body.clientHeight;

			const thresholds = {
				html: 770,
				css: 820,
				python: 800,
			};

			const newScrollPercentWidths = {};
			for (const [image, threshold] of Object.entries(thresholds)) {
				let newScrollPercent;
				if (scrollTop > threshold) {
					newScrollPercent =
						((scrollTop - threshold) /
							(documentHeight - viewportHeight - threshold)) *
						100;
				} else {
					newScrollPercent = 0;
				}
				newScrollPercentWidths[image] = newScrollPercent;
			}
			setScrollPercentWidths(newScrollPercentWidths);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<ScrollDownLine />
			<div className="header-icon-images">
				<div className="header-flex-timeline-icons">
					<img
						src={"/img/html-5.png"}
						alt="HTML"
						className={"header-lang-icon html-icon"}
						style={{ maxWidth: 65, width: `${scrollPercentWidths.html}%` }}
					/>
					<img
						src={"/img/css-3.png"}
						alt="CSS"
						className="header-lang-icon css-icon"
						style={{ maxWidth: 65, width: `${scrollPercentWidths.css}%` }}
					/>
					<img
						src={"/img/py.png"}
						alt="Python"
						className="header-lang-icon python-icon"
						style={{ maxWidth: 65, width: `${scrollPercentWidths.python}%` }}
					/>
					{/* Add more images with similar style attribute */}
				</div>
			</div>
		</>
	);
};

export default Test2;
