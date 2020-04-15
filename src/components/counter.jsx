import React, { Component } from 'react';

class Counter extends Component{
    
    render(){
        
        return (
            <div className="mt-4">
                <span>
                    <b className={ this.getBadgeClass() }>{ this.formatValue() }</b>
                </span>
                <button
                    onClick={() => this.props.onIncrement(this.props.counter) }
                    className="btn btn-primary ml-4">
                        Increment
                </button>
                <button 
                    onClick={() => this.props.onDelete(this.props.counter.id) }
                    className="btn btn-danger ml-4">
                        Delete
                </button>
            </div>
        );
    }



    getBadgeClass(){
        let badge_class = 'badge badge-';
        badge_class += (this.props.counter.value === 0) ? 'warning' : 'primary' ;
        return badge_class;
    }


    formatValue(){
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value ;
    }
}

export default Counter;