import React, { Component } from 'react';

class Counter extends Component{
    state = {
        value : this.props.counter.value,
    }
    
    
    render(){
        
        return (
            <div className="mt-4">
                <span>
                    <b className={ this.getBadgeClass() }>{ this.formatValue() }</b>
                </span>
                <button
                    onClick={ this.handleIncrement }
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


    handleIncrement = () => {
        this.setState({ value : this.state.value + 1 });
    }

    getBadgeClass(){
        let badge_class = 'badge badge-';
        badge_class += (this.state.value === 0) ? 'warning' : 'primary' ;
        return badge_class;
    }


    formatValue(){
        const {value} = this.state;
        return value === 0 ? 'Zero' : value ;
    }
}

export default Counter;