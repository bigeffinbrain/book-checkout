import './App.css';
import { Component } from 'react'
import BookList from './components/bookList'

class App extends Component {
  constructor() {
    super()
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3001/books")
    .then((response) => response.json())
    .then((data) => this.setState({books: data}))
    .then(console.log(this.state.books))
  }

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Welcome to KT Books™
        </header>
        <div>
          <h3>Here are is list of available books:</h3>
        </div>
        <div>
         <BookList books={this.state.books}/>
        </div>
      </div>
    )
  }
}

export default App;
