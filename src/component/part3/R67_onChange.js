import React, {Component, useEffect, useState} from 'react';

class R67_onChange extends Component{
    change = (e) => {
        var val = e.target.value;
        console.log('param : '+val);
    }

    render() {
        return (
            <>
            <input type="text" onChange={this.change}/>
            <select onChange={this.change}>
                <option value="react">react</option>
                <option value="200">200</option>
            </select>
            </>
        )
    }
}
export default R67_onChange;