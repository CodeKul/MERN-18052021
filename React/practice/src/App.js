
import './App.css';
import Counter from './components/Counter';
import Display from './components/Display';
import DisplayCity from './components/DisplayCity';
import Products from './components/Products';
import Welcome from './components/Welcome';
//rce -class
//rfce - function
function App() {
  return (
    <div className="App">
      {/* <Display/>
      <Products tablename="Products Table"/>
      <Welcome username="ABC" userid={100}/> */}
      
      <DisplayCity/>
      <Counter incBy={4}/>
    </div>
  );
}

export default App;
