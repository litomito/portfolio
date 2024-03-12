import React, { useState, useEffect } from "react";

const Test = () => {
	const [scrollPercentWidth, setScrollPercentWidth] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const viewportHeight = window.innerHeight;
			const documentHeight = document.body.clientHeight;
			const newScrollPercent =
				(scrollTop / (documentHeight - viewportHeight)) * 230;
			setScrollPercentWidth(newScrollPercent);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="line-div">
			<div className="line" style={{ width: `${scrollPercentWidth}%` }} />
		</div>
	);
};

export default Test;
