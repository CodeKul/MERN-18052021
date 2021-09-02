
import './App.css';
import Counter from './components/Counter';
import Display from './components/Display';
import DisplayCity from './components/DisplayCity';
import Products from './components/Products';
import Welcome from './components/Welcome';
import P from './components/P'
import ReactFragment from './components/ReactFragment';
//rce -class
//rfce - function
function App() {
  return (
    <div className="App">
      {/* <Display/>
      <Products tablename="Products Table"/>
     */}
      
      {/* <DisplayCity/>
      <Counter incBy={4}/>

      <Welcome username="ABC" userid={100}/>  */}

      <P/>

      <ReactFragment/>
    </div>
  );
}

export default App;
