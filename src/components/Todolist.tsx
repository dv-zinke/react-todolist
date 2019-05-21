import * as React from 'react';

interface Props {
   todo:string
  }
  
class Todolist extends React.Component<Props> {
    public render() {
        const {todo} = this.props;
        return (
            <div className="todolist">
               {todo}
               <button>삭제</button>
            </div>
        );
    }
}

export default Todolist;
