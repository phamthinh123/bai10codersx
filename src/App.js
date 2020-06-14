import React, { Component } from 'react';

import './App.css';

import Table from './components/Table'

class App extends Component {
  constructor(){
    super();
    this.contents=[
{stt:1,First:"Mark",Last:"Otto",Handle:"@mdo"},
{stt:2,First:"Jacob",Last:"Thornton",Handle:"@fat"},
{stt:3,First:"Mark",Last:"Otto",Handle:"@mdo"}
    ]
  }
  render(){
  return (
    <div className="App">
      <table className="Header">
      <tr>
      <th>#</th>
      <th>First</th>
      <th>Last</th>
      <th>Handle</th>

      </tr>
     </table>   
      {
        this.contents.map((content) =>
        <Table content={content}/>
        )
      }
      
    
    </div>
  );
}
}

export default App;
