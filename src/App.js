import React from "react";
import LoadingScreen from "./Components/LoadingScreen";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import WhiteScreen from "./Components/WhiteScreen";

function App() {
	return (
		<div className="App">
			<LoadingScreen />
			<WhiteScreen />
			<SpeedInsights />
			<Analytics />
		</div>
	);
}

export default App;
