import './App.css';
import Weather from "./Weather";


export default function App() {
  return (
    <div className="App">
      <div className="Container">
      <Weather defaultCity="Lansing" />
      <footer>
        <p>Coded by <a href="https://github.com/MutableSpectre" target="_blank" rel="noopener noreferrer"><strong>Stephanie Ratliff-Putney</strong></a>, 
        open sourced on <a href="https://github.com/MutableSpectre/my-app" target="_blank" rel="noopener noreferrer">Github</a>, 
        and hosted on <a href="https://shecodes-weatherreactapp.netlify.app/" target="_blank" rel="noopener noreferrer">Netlify</a>.
        </p>
      </footer>
      </div>
    </div>
  );
}
