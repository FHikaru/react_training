// import logo from './logo.svg';
import './App.css';
import Greeting from "./q1/Greeting";
import Counter from "./q2/Counter";
import NameForm from './q3/NameForm';
import Timer from './q4/Timer';

function App() {
  return (
    <>
      <h1>Componetn Test</h1>
      <h2>Question4</h2>
      <Timer />
      <h2>Question3</h2>
      <NameForm />
      <h2>Question2</h2>
      <Counter />
      <h2>Question1</h2>
      <Greeting name=" my Name "/>
    </>
  )
}

export default App;
