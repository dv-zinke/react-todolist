import * as React from "react"
import "./Todolist.css"
import { Button } from "antd"

interface Props {
  todo: string
  complete: boolean
  deleteClick(e: React.FormEvent<HTMLButtonElement>): void
  completeClick(e: React.FormEvent<HTMLButtonElement>): void
}

class Todolist extends React.Component<Props> {
  public render() {
    const { todo, deleteClick, completeClick, complete } = this.props
    return (
      <div className="todolist">
        {complete ? (
          <div className="value complete">{todo}</div>
        ) : (
          <div className="value">{todo}</div>
        )}
        <button onClick={completeClick}>완료</button>
        <Button type="danger" className="deleteBtn" onClick={deleteClick}>
          삭제
        </Button>
      </div>
    )
  }
}

export default Todolist
