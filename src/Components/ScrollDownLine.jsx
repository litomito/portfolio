import React, { useEffect } from "react";

const ScrollDownLine = () => {
	useEffect(() => {
		const path = document.querySelector("path");
		const pathLength = path.getTotalLength();

		path.style.strokeDasharray = `${pathLength} ${pathLength}`;
		path.style.strokeDashoffset = pathLength;

		window.addEventListener("scroll", () => {
			const scrollPercentage =
				(document.documentElement.scrollTop + document.body.scrollTop) /
				(document.documentElement.scrollHeight -
					document.documentElement.clientHeight);
			const drawLength = pathLength * scrollPercentage;
			path.style.strokeDashoffset = pathLength - drawLength;
		});
	}, []);

	return (
		<div className="scroll-line-div">
			<div className="scroll-line-text">Scroll</div>
			<div className="line-container">
				<svg
					className="scroll-line-line"
					width="257"
					height="2270"
					viewBox="0 0 257 2270"
					fill="none"
					preserveAspectRatio="xMidYmax meet"
				>
					<title>line</title>
					<path
						d="M128.5 0V366.736V407.617V451.642V460.028V650.805C128.5 650.805 415.375 745.145 128.5 844.726C-158.375 944.307 128.5 1033.41 128.5 1033.41C128.5 1033.41 415.375 1130.89 128.5 1221.04C-158.375 1311.19 128.5 1412.86 128.5 1412.86C128.5 1412.86 413.024 1503.01 128.5 1600.49C-156.024 1697.98 128.5 1790.22 128.5 1790.22V2270"
						stroke="#727272"
						strokeWidth="2"
					/>
				</svg>
			</div>
		</div>
	);
};

export default ScrollDownLine;
