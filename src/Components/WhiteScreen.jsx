import React, { useState, useEffect } from "react";

const Test = () => {
	const [scrollPercent, setScrollPercent] = useState(0);
	const threshold = 2240;

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const viewportHeight = window.innerHeight;
			const documentHeight = document.body.clientHeight;
			let newScrollPercent;

			if (scrollTop > threshold) {
				newScrollPercent =
					((scrollTop - threshold) /
						(documentHeight - viewportHeight - threshold)) *
					105;
			} else {
				newScrollPercent = 0;
			}

			setScrollPercent(newScrollPercent);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<div className="new-face">
				<div
					className="box-open"
					style={{
						width: `${scrollPercent}vw`,
						height: `${scrollPercent}vh`,
					}}
				/>
			</div>
		</>
	);
};

export default Test;
