import React, {Component} from 'react';
import Counter from './counter';


class Counters extends Component{
    
    state = {
        counters : [
            { id : 1, value : 4 },
            { id : 2, value : 0 },
            { id : 3, value : 0 },
            { id : 4, value : 0 },
        ]
    };

    
    render(){
        return (
            <div className="container">
                <h1>Welcome to my first React App.</h1>
                <span>
                    { this.state.counters.map( counter => <Counter key={ counter.id } counter={counter} onDelete={this.handleDelete}/> ) }
                </span>
            </div>
        )
    }


    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
    }
}

export default Counters;