import React, {Component, useEffect, useState} from 'react';

class R66_onClick extends Component{
    buttonClick = (param) => {
        if(typeof param != 'string') param = "Click a"
        console.log('param : '+param);
    }

    render() {
        return (
            <>
            <button onClick={e => this.buttonClick("Click button")}>Click button</button>
            <div onClick={e => this.buttonClick("Click div")}>Click div</div>
            <a href="javascript:" onClick={this.buttonClick}>Click a</a>
            </>
        )
    }
}
export default R66_onClick;