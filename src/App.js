import React from 'react';
import './App.css';

import Sidebar from './components/Sidebar'
import Chat from './components/Chat';

function App() {
  return (
		// BEM Naming Convention
		<div className="app">
			<div className="app__body">
				<Sidebar />
				<Chat />
			</div>
		</div>
	);
}

export default App;
