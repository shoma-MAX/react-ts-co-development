import React, { Component } from "react";
import { render } from "react-dom";
import GoodBy from "./GoodBy";
import Hello from "./Hello";
import "./style.css";

interface AppProps {}
interface AppState {
  name: string;
  evangelion: string;
  age: number;
  value: string;
}

class App extends Component<AppProps, AppState> {
  [x: string]: any;
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
      evangelion: "evangelion",
      age: 21,
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submited" + this.tate.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter your name:
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
        </form>

        <Hello name={this.state.value} age={this.state.age} />
        <p>Start editing to see some magic happen :)</p>
        <GoodBy evangelion={this.state.evangelion} />
        <Hello name={this.state.evangelion} age={this.state.age} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
