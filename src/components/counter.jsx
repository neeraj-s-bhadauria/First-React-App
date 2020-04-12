import React, { Component } from 'react';

class Counter extends Component{
    state = {
        count : 0
    }
    
    
    render(){
        return (
            <div class="container">
                <h1>Hello MotherFuckers.</h1>
                <p>
                    <b>{ this.formatCount() }</b>
                </p>
                <button class="btn btn-primary">Increment</button>
            </div>
        );
    }

    
    formatCount(){
        const {count} = this.state;
        return count === 0 ? 'Zero' : count ;
    }
}

export default Counter;