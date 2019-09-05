import React from "react"

class Swahilibox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
    }
  }

  render() {
    const resetCounter = () => this.setState({ index: 0 })

    return (
      <div>
        <h3>I am a class component!</h3>
        <p>Current index: {this.state.index}</p>
        <button
          onClick={() =>
            this.setState({
              index: this.state.index + 1,
            })
          }
        >
          Bump index
        </button>
        <button onClick={resetCounter}>Reset</button>
      </div>
    )
  }
}

class SecondClass extends React.Component {
  render() {
    return <div>Second class</div>
  }
}

export default Swahilibox
