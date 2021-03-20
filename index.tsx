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
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
      evangelion: "evangelion",
      age:21
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} age={this.state.age} />
        <p>Start editing to see some magic happen :)</p>
        <GoodBy evangelion={this.state.evangelion} />
        <Hello name={this.state.evangelion} age={this.state.age}/>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
