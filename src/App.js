import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home/Home.jsx';
import MultipleItems from './Components/Home/cardCarousel/cardCarousel';


function App() {
  return (
    <div className="App">
        <Home />
        <MultipleItems />
    </div>
  );
}

export default App;