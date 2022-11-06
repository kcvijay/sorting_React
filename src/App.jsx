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
    if (this.state.originalText.length === 1) {
      this.setState({
        sortedText: "",
      });
    }
    this.setState({
      originalText: e.target.value.split(",").map((el) => Number(el)),
    });
  };

  sortingHandler = (e) => {
    e.preventDefault();
    if (this.state.selectOption === "" && this.state.originalText === "") {
      this.setState({
        sortedText: "Either sorting-type or, numbers are empty.",
      });
    } else {
      if (this.state.selectOption === "bubble") {
        this.setState({
          originalText: this.bubbleSort(this.state.originalText),
        });
      } else if (this.state.selectOption === "selection") {
        this.setState({
          originalText: this.selectionSort(this.state.originalText),
        });
      }
    }

    this.setState({
      sortedText: this.state.originalText.join(", "),
    });
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

  reloadWindow = () => {
    window.location.reload();
  };

  render() {
    return (
      <div className="app-wrapper">
        <h2>Bubble & Selection Sorting</h2>
        <form className="inputs" onSubmit={this.sortingHandler}>
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
            <input
              type="text"
              id="sort-input"
              placeholder="For ex. 11, 12, 10, 8 ..."
              onChange={this.inputHandler}
            />
          </div>
          <button id="btn-sort" type="submit" onClick={this.sortingHandler}>
            Sort
          </button>
          <button id="btn-reload" onClick={this.reloadWindow}>
            Refresh
          </button>
        </form>
        <div className="result-field">
          <h3>{this.state.selectOption}</h3>
          <h4 id="result-text">{this.state.sortedText}</h4>
        </div>
        <footer>
          <p>&copy;: Vijay KC, BCH React & Node 2022</p>
          <a
            href="https://github.com/kcvijay/sorting_React"
            target="_blank noreferer"
          >
            View at GitHub
          </a>
        </footer>
      </div>
    );
  }
}
export default App;
