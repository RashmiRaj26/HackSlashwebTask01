import React, { Component } from 'react'

class Card extends Component {
    state = {
        names: [
          'Rashmi','Ishika','Yeshi','Mytra','Michael','Bunny','Cherry','Honey','Myra','Ishika'
        ],searchItems: '',
      };
    
    searchMe = event => {
        this.setState({ searchItems: event.target.value });
      };
    
      render() {
        const filteredItems = this.state.names.filter(item =>
          item.toLowerCase().includes(this.state.searchItems.toLowerCase())
        );
    
        return (
          <div>
            <div>
              <div>
                <SearchMe onSearch={this.searchMe} />
              </div>
            </div>
            <div>
              <div>
                <MyData names={filteredItems} />
              </div>
            </div>
          </div>
        );
      }
    }
    
    const MyData = ({ names }) => (
      <ul className="list-group">
        {names.map((item, i) => (
          <li key={i} className="list">
            {item}
          </li>
        ))}
      </ul>
    );
    const SearchMe = ({ onSearch }) => (
      <input
        type="text" 
        className="searchBar"
        placeholder="Search..."
        onChange={onSearch}
      />
    );
    
    
export default Card;
