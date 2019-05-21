import * as React from 'react';
import './Input.css'

class Input extends React.Component {
    public render() {
        return (
            <div className="input_Container">
                <input type="text" placeholder='할일을적어주세요'>
                </input>
                <button>확인</button>
            </div>
        );
    }
}

export default Input;
