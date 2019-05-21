import * as React from 'react';
import './App.css';
import Input from "./components/Input";
import Header from "./components/Header";

class App extends React.Component {
  state ={
   inputValue: ''
  };
  InputOnChange = () =>{

  };
  public render() {
    return (
      <div className="App">
         <Header/>
         <Input />
      </div>
    );
  }
}

export default App;
