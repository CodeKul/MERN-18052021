import './App.css';
import { BrowserRouter ,Route,Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
function App() {
  return (
   
    <div>
      <BrowserRouter>
          <Navbar/>
          <Switch>
          <Route exact path="/" component={Home}/>
          {/* <Route path="/about" component={Contact}/> */}
          <Route path="/about" component={About}/>
          
          <Route path="/blog" component={Blog}/>
          <Route path="/contact" component={Contact}/>
         
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
