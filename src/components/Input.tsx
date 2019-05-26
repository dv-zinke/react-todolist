import * as React from 'react';
import './Input.css'

interface Props {
    changeEvent(e:React.FormEvent<HTMLInputElement>): void;
    clickEvent():void,
    refEvent(input:HTMLInputElement):void
}

  
  
class Input extends React.Component<Props> {

    public render() {
        const {changeEvent, clickEvent, refEvent} = this.props;
        return (
            <div className="input_Container">
                <input  ref={refEvent} type="text" placeholder='할일을적어주세요' onChange={changeEvent}/>
                <button onClick={clickEvent}>확인</button>
            </div>
        );
    }
}

export default Input;
