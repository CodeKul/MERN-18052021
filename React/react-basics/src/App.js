import './App.css';
import HandleLogin from './Conditional Rendering/HandleLogin';
import HandleLogin1 from './Conditional Rendering/HandleLogin1';
import ShowLoginStatus from './Conditional Rendering/ShowLoginStatus';
import ShowLoginStatus2 from './Conditional Rendering/ShowLoginStatus2';
import ShowMore from './Conditional Rendering/ShowMore';
import CR from './Conditional Rendering/CR'
import ComponentLifecycle from './LifeCycle/ComponentLifecycle';
function App() {

  return (
    <div>
      {/* <ShowLoginStatus/> */}
      {/* <ShowLoginStatus1 isLoggedIn={true}/> */}
      {/* <ShowLoginStatus2 isLoggedIn={false}/> */}
      {/* <HandleLogin/> */}

      {/* <HandleLogin1/> */}

      {/* <ShowMore/> */}

      {/* <CR/> */}

      <ComponentLifecycle/>

    </div>
  );
}

export default App;
