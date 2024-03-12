import React from "react";
import TimeLine from "./TimeLine";
import Test2 from "./Test2";

const Header = () => {
	return (
		<>
			<div className="header">
				<div className="header-text-div">
					<h1 className="header-text">
						Hey I'm <span className="header-name">Linus</span>
					</h1>
				</div>
				<TimeLine />
				{/* <Test2 /> */}
			</div>
		</>
	);
};

export default Header;
