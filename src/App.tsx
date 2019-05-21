import * as React from 'react';
import './App.css';
import Input from "./components/Input";
import Header from "./components/Header";
import Todolist from './components/Todolist';



class App extends React.Component {
  state ={
   number:0, 
   inputValue: '',
   todolist:[
     
   ]
  };
  inputOnChange = (e: React.FormEvent<HTMLInputElement>) =>{
    this.setState({
      inputValue:e.currentTarget.value
    });
  };
  buttonClick = () =>{
    const {number, inputValue, todolist} = this.state;
    this.setState({
      inputValue:'',
      number: number+1,
      todolist:[...todolist, {id:number, value:inputValue}]
    })
  }


  public render() {
    const todolistMake = () =>this.state.todolist.map((todo:any)=>{return <Todolist todo={todo.value}/>})
    
    return (
      <div className="App">
         <Header/>
         <Input changeEvent={this.inputOnChange} clickEvent={this.buttonClick}/>
         <div className="todolist_container">
            {todolistMake()}
         </div>
      </div>
    );
  }
}

export default App;
