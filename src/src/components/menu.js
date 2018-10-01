import React, { Component } from 'react';
import {render} from 'react-dom';

class List extends Component {

    render() {
      return <ul>
                {items.map(i =>
                <Item value={i} />
                )}
            </ul>;
    }
  }
  
class Item extends Component {
    render() {
      return <li><b>{value}</b></li>;
    }
  }
  
 <List items={[1, 2, 3, 4, 5]} />,
   
 export default List