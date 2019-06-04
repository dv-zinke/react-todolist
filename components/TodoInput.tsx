import * as React from "react"
import "./TodoInput.css"
import Button from "antd/lib/button"
import { Input } from "antd"

interface Props {
  changeEvent(e: React.FormEvent<HTMLInputElement>): void
  clickEvent(): void
  refEvent(input: any): void
}

class TodoInput extends React.Component<Props> {
  public render() {
    const { changeEvent, clickEvent, refEvent } = this.props
    return (
      <div className="input_Container">
        <Input ref={refEvent} placeholder="할일을적어주세요" onChange={changeEvent} />
        <Button type="primary" onClick={clickEvent}>
          확인
        </Button>
      </div>
    )
  }
}

export default TodoInput
