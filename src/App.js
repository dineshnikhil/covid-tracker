import  { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './compounents/Nav';
import Home from './compounents/Home';
// import Article from './compounents/Article';

function App() {
  return (
    <div className="App bg-emerald-900">
      <Nav />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
