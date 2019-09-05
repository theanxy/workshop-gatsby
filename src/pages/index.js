import React from "react"
import Item from "../components/item"

class Swahilibox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {
          title: "Buy grocery",
        },
        {
          title: "Tidy up room",
        },
        {
          title: "Have dinner",
        },
      ],
    }
  }

  render() {
    return (
      <div>
        <h3>I am a class component!</h3>

        {this.state.todos.map(val => (
          <Item key={val.title} title={val.title} />
        ))}
      </div>
    )
  }
}

export default Swahilibox
