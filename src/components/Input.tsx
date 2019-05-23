import * as React from 'react';
import './Input.css'

interface Props {
    changeEvent(e:React.FormEvent<HTMLInputElement>): void;
    clickEvent():void,
   
  }
  
class Input extends React.Component<Props> {
    public render() {
        const {changeEvent, clickEvent} = this.props;
        return (
            <div className="input_Container">
                <input  type="text" placeholder='할일을적어주세요' onChange={changeEvent}>
                </input>
                <button onClick={clickEvent}>확인</button>
            </div>
        );
    }
}

export default Input;
