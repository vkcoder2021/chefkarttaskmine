import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Menu from './Components/menu';
import ViewIngredients from './Components/viewIngredients';
function App() {
  return (
    <div className="App">
      <Router>
       <Routes>
        <Route path="/" element ={<Menu/>}/>
        <Route path="/view" element ={<ViewIngredients/>}/>
        </Routes> 
      </Router>
    </div>
  );
}

export default App;
