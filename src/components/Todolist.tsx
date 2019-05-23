import * as React from 'react';
import './Todolist.css'
interface Props {
   todo:string,
   complete:boolean,
   deleteClick(e:React.FormEvent<HTMLButtonElement>):void,
   completeClick(e:React.FormEvent<HTMLButtonElement>):void
  }
  
class Todolist extends React.Component<Props> {
    public render() {
        const {todo, deleteClick, completeClick, complete} = this.props;
        return (
            <div className="todolist">
               { complete ? <div className="value complete">{todo}</div> : <div className="value">{todo}</div>}
               <button onClick={completeClick}>완료</button>
               <button onClick={deleteClick}>삭제</button>
            </div>
        );
    }
}

export default Todolist;
