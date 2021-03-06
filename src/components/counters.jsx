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
                <button
                    onClick={this.handleReset}
                    className="btn btn-dark mt-4">    
                        Reset
                </button>
                <h1>Welcome to my first React App.</h1>
                <span>
                    { this.state.counters.map( counter => <Counter key={ counter.id } counter={counter} onDelete={this.handleDelete} onIncrement={this.handleIncrement}/> ) }
                </span>
            </div>
        )
    }



    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({ counters });
    };

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    };


    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
    };
}

export default Counters;