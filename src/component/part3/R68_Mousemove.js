import React, {Component, useEffect, useState} from 'react';

class R68_Mousemove extends Component{
    MouseMove(tag) {
        console.log('TAG : '+tag);
    }

    render() {
        return (
            <>
            <div onMouseMove={e => this.MouseMove("div")}>
                <h3>DIV onMouseMove</h3>
            </div>
            <input type='text' onMouseMove={e => this.MouseMove("input")}/>
            <select onMouseMove={e => this.MouseMove("select")}>
                <option value="react">react</option>
                <option value="200">200</option>
            </select>
            </>
        )
    }
}
export default R68_Mousemove;