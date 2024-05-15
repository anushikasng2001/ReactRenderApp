import logo from './logo.svg';
import './App.css';
import UseStateRender from './Components/UseStateRender/UseStateRender';
import UseReducerRender from './Components/UseReducerRender/UseReducerRender';
import ObjectUseState from './Components/ImmutableState/ObjectUseState';
import ArrayUseState from './Components/ImmutableState/ArrayUseState';
import Parent from './Components/ParentChild/Parent';
import ParentOne from './Components/Optimization/ParentOne';
import ChildOne from './Components/Optimization/ChildOne';
import GrandParent from './Components/Optimization/GrandParent';
import ParentTwo from './Components/Optimization/ParentTwo';
import ParentThree from './Components/Incorrect Optimization/ParentThree';
import ParentFour from './Components/Incorrect Optimization/ParentFour';
import ContextParent from './Components/Context/ContextParent';

function App() {
  return (
    <div className="App">
      <ContextParent/>
      {/* <ParentFour/> */}
      {/* <ParentThree/> */}
      {/* <ParentTwo/> */}
      {/* <GrandParent/> */}
      {/* <ParentOne>
        <ChildOne/>
      </ParentOne> */}
      {/* <Parent/> */}
      {/* <ArrayUseState/> */}
      {/* <ObjectUseState/> */}
      {/* <UseReducerRender/> */}
      {/* <UseStateRender/>*/}
    </div>
  );
}

export default App;
