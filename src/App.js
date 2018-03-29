import React from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer';

const App = () => {
	return (
		<div className="App">
     		<h1>Lista komentarzy:</h1>
     		<CommentsListContainer />
    	</div>
  	);
};

export default App;
