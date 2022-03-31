import React from "react";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import UserContainer from "./components/UserContainer";

function App() {
	return (
		<div>
			<IceCreamContainer />
			<HooksCakeContainer />
			<CakeContainer />
			<UserContainer />
		</div>
	);
}

export default App;
