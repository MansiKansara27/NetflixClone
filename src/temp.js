import React from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowseRouter as Router, Switch, Route} from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";

function App(){
	const user = {
		name: "mansi",
	};

	return(
		<div className="app">
			<Router>
			{!user ? (
				<LoginScreen />
			):(
				<Switch>
					<Route exact path="/">
						<HomeScreen />
					</Route>
				</Switch>
			)}
			</Router>
		</div>
	);
}

export default App;