import React from 'react';
import './App.css';

import Sidebar from './components/Sidebar'
import Chat from './components/Chat';
import Login from './components/Login';
import { Switch, Route } from "react-router-dom";
import { useStateValue } from './context/StateProvider';

function App() {
  const [{ user }] = useStateValue();

  return (
		<div className="app">
			{!user ? (
				<Login />
			) : (
				<div className="app__body">
					<Sidebar />
					<Switch>
						<Route path="/rooms/:roomId">
							<Chat />
						</Route>
						<Route path="/">
							<Chat />
						</Route>
					</Switch>
				</div>
			)}
		</div>
	);
}

export default App;