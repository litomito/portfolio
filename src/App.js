import React from "react";
import LoadingScreen from "./Components/LoadingScreen";
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"


function App() {
	return (
		<div className="App">
			<LoadingScreen />
			<SpeedInsights />
			<Analytics />
		</div>
	);
}

export default App;
