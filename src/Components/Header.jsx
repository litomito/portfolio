import React from "react";
import TimeLine from "./TimeLine";


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
			</div>
		</>
	);
};

export default Header;
