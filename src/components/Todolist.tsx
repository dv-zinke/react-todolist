import * as React from 'react';

interface Props {
   todo:string,
   deleteClick(e:React.FormEvent<HTMLButtonElement>):void,
   completeClick():void
  }
  
class Todolist extends React.Component<Props> {
    public render() {
        const {todo, deleteClick, completeClick} = this.props;
        return (
            <div className="todolist">
               <div className="value">{todo}</div>
               <button onClick={completeClick}>완료</button>
               <button onClick={deleteClick}>삭제</button>
            </div>
        );
    }
}

export default Todolist;
