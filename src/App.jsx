import React from "react";
import { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    originalText: "",
    sortedText: "",
    selectOption: "",
  };

  selectHandler = (e) => {
    this.setState({
      selectOption: e.target.value,
    });
  };

  inputHandler = (e) => {
    this.setState({
      originalText: e.target.value.split(","),
    });
  };

  sortingHandler = () => {
    if (this.state.selectOption === "bubble") {
      this.setState({
        sortedText: this.bubbleSort(this.state.originalText),
      });
    } else if (this.state.selectOption === "selection") {
      this.setState({
        sortedText: this.selectionSort(this.state.originalText),
      });
    } else {
      this.setState({
        sortedText: "Something went wrong. Please check and input again.",
      });
    }
    console.log(this.state.sortedText);
  };

  bubbleSort = (input) => {
    let inputLength = input.length;
    for (let i = 0; i < inputLength; i++) {
      for (let j = 0; j < inputLength; j++) {
        if (input[j] > input[j + 1]) {
          let temp = input[j];
          input[j] = input[j + 1];
          input[j + 1] = temp;
        }
      }
    }
    return input;
  };

  selectionSort = (input) => {
    for (let i = 0; i < input.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < input.length; j++) {
        if (input[j] < input[minIndex]) {
          minIndex = j;
        }
      }
      [input[i], input[minIndex]] = [input[minIndex], input[i]];
    }
    return input;
  };

  render() {
    return (
      <div className="app-wrapper">
        <h2>Bubble & Selection Sorting</h2>
        <div className="inputs">
          <div>
            <select
              name="sort-type"
              id="sort-type"
              value={this.state.selectOption}
              onChange={this.selectHandler}
            >
              <option>Pick a sorting type..</option>
              <option value="bubble">Bubble Sorting</option>
              <option value="selection">Selection Sorting</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              id="sort-input"
              placeholder="Separate numbers with comma.."
              onChange={this.inputHandler}
            />
          </div>
          <button onClick={this.sortingHandler}>Sort</button>
          <button>Refresh</button>
        </div>
        <div className="result-field">
          <p id="result-text">{this.state.sortedText}</p>
        </div>
        <footer>
          <p>&copy;: Vijay KC, BCH React & Node 2022</p>
        </footer>
      </div>
    );
  }
}
export default App;
