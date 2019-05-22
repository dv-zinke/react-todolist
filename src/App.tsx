import * as React from 'react';
import './App.css';
import Input from "./components/Input";
import Header from "./components/Header";
import Todolist from './components/Todolist';



class App extends React.Component {
  state ={
   number:0, 
   inputValue: '',
   todolist:[]
  };
  input:any = null;
    /**
     * 인풋 체인지이벤트
     * @param {React.FormEvent<HTMLInputElement>} e
     */
  inputOnChange = (e: React.FormEvent<HTMLInputElement>) =>{
    this.setState({
      inputValue:e.currentTarget.value
    });
  };
    /**
     * 인풋클릭이벤트
     */
  buttonClick = () =>{
    const {number, inputValue, todolist} = this.state;
    if(inputValue === ''){
        console.log(this.input);
        return alert("입력하지않으셨습니다");
    }
    this.setState({
      inputValue:'',
      number: number+1,
      todolist:[...todolist, {id:number, value:inputValue, complete:false}]
    });



  };
    /**
     * 삭제클릭이벤트
     */
  deleteClick = (e: React.FormEvent<HTMLButtonElement>) =>{
    const {todolist} = this.state;
    const parent:any = e.currentTarget.parentNode;
    this.setState({
       todolist: todolist.filter((todo:any) => {return todo.value !== parent.children[0].innerText})
    });
  };
    /**
     * 완료클릭이벤트
     */
  completeClick = () =>{
      console.log("완료클릭");
  };


  public render() {
    const todolistMake = () =>this.state.todolist.map((todo:any)=>{return <Todolist key={todo.id} todo={todo.value} deleteClick={this.deleteClick} completeClick={this.completeClick}/>});
    
    return (
      <div className="App">
         <Header/>
         <Input ref={ref=>{this.input =ref}} changeEvent={this.inputOnChange} clickEvent={this.buttonClick}/>
         <div className="todolist_container">
            {todolistMake()}
         </div>
      </div>
    );
  }
}

export default App;
