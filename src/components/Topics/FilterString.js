import React, {Component} from 'react';

class FilterString extends Component {
    constructor (){
        super();

        itCrowd: ['Maurice Moss', 'Jen Barber', 'Roy', 'Douglas Reynholm'];
        userInput: '';
        filteredArray: []
    }

    handleChange(val){
        this.setState({userInput: val})

    }

    filterNames(userInput){
        let itCrowd = this.state.itCrowd;
        let filteredCrowd = [];

        for(let i = 0; i < itCrowd.length; i++){
            if( itCrowd[i].inlcudes(userInput)){
                filteredCrowd.push(itCrowd[i]);
            }
        }

        this.setState({filteredArray: filteredCrowd});

    }

    render (){
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className = "puzzleText">Names: {JSON.stringify(this.state.itCrowd, null, 10)}</span>
                <input className = "inputLine" onChange = {(e) => this.handleChange(e.target.value)}/>
                <button className = "confirmationButton" onClick = {() => this.filterNames(this.state.userInput)}>Filter</button>
                <span className = "resultsBox filterStringRB">Filtered Names: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        );
    }
}

export default FilterString;