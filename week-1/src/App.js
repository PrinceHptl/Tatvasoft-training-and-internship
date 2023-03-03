import logo from './logo.svg';
import './App.css';
import {Title} from './components/Title';
import Home from './components/Home';
import Hello from './components/Hello';
import Homestate from './components/Homestate';
import Eventclick from './components/Eventclick';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
     <Homestate />
    <Home name="prince" sirname="patel"/>
     <Home name="sahil" sirname="hirapara" />
    <Home name="ayush" sirname="patel"/>
    <Eventclick />
    <Counter /> 
    <Homestate />
    <Title name="prince" sirname="patel">
    <p>this is children props</p>
    </Title>
    <Title name="sahil" sirname="hirapara">
      <button>Action</button>
    </Title>
    <Title name="ayush" sirname="patel">
    <button>Action</button>
    </Title> 
    <Hello />
    </div>
  );
}

export default App;
