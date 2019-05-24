import * as React from 'react';
import './App.css';
import Input from "./components/Input";
import Header from "./components/Header";
import Todolist from './components/Todolist';



class App extends React.Component {
  private input:any;
  state ={
   number:0, 
   inputValue: '',
   todolist:[]
  };
    /**
     * 인풋 체인지이벤트
     * @param {React.FormEvent<HTMLInputElement>} e
     */
  private inputOnChange = (e: React.FormEvent<HTMLInputElement>) =>{
    this.setState({
      inputValue:e.currentTarget.value
    });
  };
    /**
     * 인풋클릭이벤트
     */
  private  buttonClick = () =>{
    const {number, inputValue, todolist} = this.state;
    
    if(inputValue === ''){
        
        return alert("입력하지않으셨습니다");
    }
    this.setState({
      inputValue:'',
      number: number+1,
      todolist:[...todolist, {id:number, value:inputValue, complete:false}]
    });
    console.log(this.input)
  };
    /**
     * 삭제클릭이벤트
     */
  private deleteClick = (e: React.FormEvent<HTMLButtonElement>) =>{
    const {todolist} = this.state;
    const parent:any= e.currentTarget.parentNode;
    this.setState({
       todolist: todolist.filter((todo:any) => {return todo.value !== parent.children[0].innerText})
    });
  };
    /**
     * 완료클릭이벤트
     */
  private completeClick = (e:React.FormEvent<HTMLButtonElement>) =>{
     const {todolist} = this.state;

      const parent:any= e.currentTarget.parentNode;

     const index = todolist.findIndex((todo:any) =>{return todo.value === parent.children[0].innerText})
     const selectTodolist:any = todolist[index];

     const nextTodolist:any = [...todolist];
     if(selectTodolist.complete) {
      e.currentTarget.innerHTML = '완료';
     }else {
      e.currentTarget.innerHTML = '취소';
     }

     nextTodolist[index] = {
       ...selectTodolist,
       complete: !selectTodolist.complete
     };

     this.setState({
       todolist:nextTodolist
     })
       
  };


  public render() {
    const todolistMake = () =>this.state.todolist.map((todo:any)=>{return <Todolist key={todo.id} complete={todo.complete} todo={todo.value} deleteClick={this.deleteClick} completeClick={this.completeClick}/>});
    
    return (
      <div className="App">
         <Header/>
         <Input ref={(ref)=>this.input=ref}changeEvent={this.inputOnChange} clickEvent={this.buttonClick}/>
         <div className="todolist_container">
            {todolistMake()}
         </div>
      </div>
    );
  }
}

export default App;
