import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Container">
      <Weather defaultCity="Lansing" />
      <footer>Coded by <a href="https://github.com/MutableSpectre" target="_blank" rel="noopener noreferrer"><strong>Stephanie Ratliff-Putney</strong></a>, 
      open sourced on <a href="https://github.com/MutableSpectre/my-app" target="_blank" rel="noopener noreferrer">Github</a>, 
      and hosted on <a href="https://shecodes-weatherreactapp.netlify.app/" target="_blank" rel="noopener noreferrer">Netlify</a>.
      </footer>
      </div>
    </div>
  );
}

export default App;
