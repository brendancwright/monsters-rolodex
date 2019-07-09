import React from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      rolodexItems: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ rolodexItems: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { rolodexItems, searchField } = this.state;
    const filteredItems = rolodexItems.filter(item =>
      item.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='Search Rolodex'
          handleChange={this.handleChange}
        />
        <CardList rolodexItems={filteredItems} />
      </div>
    );
  }
}

export default App;
