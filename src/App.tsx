import * as React from "react"
import "./App.css"
import TodoInput from "./components/TodoInput"
import Header from "./components/Header"
import Todolist from "./components/Todolist"
import { firestore } from "./backend/Firebase"
class App extends React.Component {
  state = {
    inputValue: "",
    todolist: []
  }
  componentDidMount() {
    firestore
      .collection("todolist")
      .get()
      .then(docs => {
        docs.forEach(doc => {
          this.setState({
            todolist: [
              ...this.state.todolist,
              { value: doc.data().value, complete: doc.data().complete, id: doc.id }
            ]
          })
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
  /**
   * 인풋 체인지이벤트
   * @param {React.FormEvent<HTMLInputElement>} e
   */
  private inputOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      inputValue: e.currentTarget.value
    })
  }
  /**
   * 인풋클릭이벤트
   */
  private buttonClick = () => {
    const { inputValue, todolist } = this.state

    if (inputValue === "") {
      this.refInput.focus()
      return alert("입력하지않으셨습니다")
    }
    let duplicate = false

    todolist.map((todolist: any, index: number) => {
      if (todolist.value === inputValue) duplicate = true
    })

    if (duplicate) return alert("동일한 list가 있습니다.")

    firestore
      .collection("todolist")
      .add({ value: this.state.inputValue, complete: false })
      .then(() => {
        console.log("add성공")
      })
    this.setState({
      inputValue: "",
      todolist: [...todolist, { value: inputValue, complete: false }]
    })

    this.refInput.state.value = ""
  }
  /**
   * 삭제클릭이벤트
   */
  private deleteClick = (e: React.FormEvent<HTMLButtonElement>) => {
    const { todolist } = this.state
    const parent: any = e.currentTarget.parentNode

    const selectData: any = todolist.filter((todo: any) => {
      return todo.value === parent.children[0].innerText
    })

    firestore
      .collection("todolist")
      .doc(selectData[0].id)
      .delete()
      .then(() => {
        this.setState({
          todolist: todolist.filter((todo: any) => {
            return todo.value !== parent.children[0].innerText
          })
        })
      })
  }
  /**
   * 완료클릭이벤트
   */
  private completeClick = (e: React.FormEvent<HTMLButtonElement>) => {
    const { todolist } = this.state

    const parent: any = e.currentTarget.parentNode

    const index = todolist.findIndex((todo: any) => {
      return todo.value === parent.children[0].innerText
    })
    const selectTodolist: any = todolist[index]

    const nextTodolist: any = [...todolist]

    nextTodolist[index] = {
      ...selectTodolist,
      complete: !selectTodolist.complete
    }

    this.setState({
      todolist: nextTodolist
    })
  }
  private refInput: any
  private InputRefEvent = (input: HTMLInputElement) => {
    this.refInput = input
  }

  public render() {
    const todolistMake = () =>
      this.state.todolist.map((todo: any, idx: number) => {
        return (
          <Todolist
            key={idx}
            complete={todo.complete}
            todo={todo.value}
            deleteClick={this.deleteClick}
            completeClick={this.completeClick}
          />
        )
      })

    return (
      <div className="App">
        <Header />
        <TodoInput
          refEvent={this.InputRefEvent}
          changeEvent={this.inputOnChange}
          clickEvent={this.buttonClick}
        />
        <div className="todolist_container">{todolistMake()}</div>
      </div>
    )
  }
}

export default App
