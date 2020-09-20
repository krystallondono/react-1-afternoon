import React, {Component} from 'react';

class FilterObject extends Component {
    constructor (){
        super();

        this.state = {
            ourPets: [
                {
                    name: 'Zeus',
                    dog: true,
                    age: 3,
                    tail:'curly'
                },
                {
                    name: 'Kobe',
                    dog: true,
                    age: 3,
                    breed: 'Pitbull'
                },
                {
                    name: 'Shadow',
                    dog: true,
                    age: 8,
                    breed: 'Cockerspaniel'
                },
                {
                    name: 'Fidel',
                    dog: false,
                    cat: true,
                    age: 5,
                    tail: 'fluffy'


                }
            ]
        }
    
        userInput: '';
        filteredArray: []
    }
    
    handleChange(value){
        this.setState({userInput: value})
    }

    filterArray(prop){
        let pets = this.state.ourPets;
        let filteredPets = [],

        for (let i = 0; i < pets.length; i++){
            if (pets[i].hasOwnProperty(prop) ){
            filteredPets.push(pets[i]);
            }
        }

        this.setState({filteredArray: filteredPets})

    }
    
    render(){
        return (
            <div className ='puzzleBox filterObjectPb'>
                <h4>Filter Object</h4>
                <span className ='puzzleText'>Original: {JSON.stringify(this.state.ourPets, null, 10)}</span>
                <input className ='inputLine' onChange ={(e) => this.handleChange(e.target.value)}/>
                <button className = 'confirmationButton' onClick = {() => this.filterArray(this.state.userInput) }></button>
                <span className ='resultsBox filterObjectPB'>Filtered:{JSON.stringify(this.state.filteredArray, null, 10)} </span>
            </div>
        );
            
    }
}

export default FilterObject;