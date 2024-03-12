import React from "react";
import LoadingScreen from "./Components/LoadingScreen";
import { SpeedInsights } from "@vercel/speed-insights/react"


function App() {
	return (
		<div className="App">
			<LoadingScreen />
			<SpeedInsights />
		</div>
	);
}

export default App;
