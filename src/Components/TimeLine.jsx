import React, { useState, useEffect } from "react";
import ScrollDownLine from "./ScrollDownLine";

const TimeLine = () => {
	const [scrollPercentWidths, setScrollPercentWidths] = useState({});
	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const viewportHeight = window.innerHeight;
			const documentHeight = document.body.clientHeight;

			const thresholds = {
				html: 620,
				css: 880,
				python: 1140,
				javascript: 1400,
				node: 1680,
				react: 1950,
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
						style={{
							maxWidth: 65,
							width: `${scrollPercentWidths.html}%`
						}}
					/>
					<img
						src={"/img/css-3.png"}
						alt="CSS"
						className="header-lang-icon css-icon"
						style={{
							maxWidth: 65,
							width: `${scrollPercentWidths.css}%`
						}}
					/>
					<img
						src={"/img/py.png"}
						alt="Python"
						className="header-lang-icon python-icon"
						style={{
							maxWidth: 65,
							width: `${scrollPercentWidths.python}%`,
						}}
					/>
					<img
						src={"/img/js.png"}
						alt="JavaScript"
						className="header-lang-icon js-icon"
						style={{
							maxWidth: 65,
							width: `${scrollPercentWidths.javascript}%`,
						}}
					/>
					<img
						src={"/img/nodejs.png"}
						alt="Node.js"
						className="header-lang-icon node-icon"
						style={{
							maxWidth: 65,
							width: `${scrollPercentWidths.node}%`
						}}
					/>
					<img
						src={"/img/react.png"}
						alt="React"
						className="header-lang-icon react-icon"
						style={{
							maxWidth: 65,
							width: `${scrollPercentWidths.react}%`
						}}
					/>
				</div>
			</div>
		</>
	);
};

export default TimeLine;
