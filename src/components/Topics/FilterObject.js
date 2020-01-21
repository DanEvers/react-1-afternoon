import React, { Component } from 'react';

export default class FilterObject extends Component {

    constructor() {
    super();
    
    this.state = {
        logbook: [
            {
            name: 'Dan Evers',
            jumpCount: 345,
            certification: 'FreeFly',
            Wingsuit: 'yes'
            },
            {
            name: 'Yohann Tores',
            age: 42,
            jumpCount: 325,
            certification: 'FreeFly'
            },
            {
            name: 'Jason Schloss',
            jumpCount: 432,
            citizen: 'Australian',
            certification: 'FreeFly'
            }
        ],

        userInput: '',
        filteredLogbook: []
    }
}

handleChange(val) {
    this.setState({ userInput: val});
}

filterLogbook(prop){
    let logbook = this.state.logbook;
    let filteredLogbook = [];

    for ( let i = 0; i < logbook.length; i++ ) {
      if ( logbook[i].hasOwnProperty(prop) ) {
        filteredLogbook.push(logbook[i]);
      }
    }

    this.setState({ filteredLogbook: filteredLogbook });
  }

render() {
    return (
        <div className='puzzleBox filterObjectPB'>
            <h4>Filter Object</h4>
            <span className='puzzleText'>Original: {JSON.stringify(this.state.logbook, null, 10) }</span>
            <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value)}></input>
            <button className='confirmationButton' onClick={ () => this.filterLogbook(this.state.userInput)}>Filter</button>
            <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredLogbook, null, 10)}</span>
        </div>
        )
    }
}