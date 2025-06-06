import React, {Component, useEffect, useState} from 'react';

class R74_Currying extends Component{
    plusNumOrString(c, d){
        return c+d;
    }
    
    PlusFunc1(a) {
        return function(b){
            return this.plusNumOrString(a, b)
        }.bind(this)
    }

    PlusFunc2 = a => b => this.plusNumOrString(a,b)

    PlusFunc(a) {
        return this.PlusFunc1(a)(200)
    }

    render() {
        return (
            <>
            <input type="button" value="NumberPlus" onClick={e => alert(this.PlusFunc(100))}/>
            <input type="button" value="StringPlus" onClick={e => alert(this.PlusFunc("react"))}/>
            </>
        )
    }
}
export default R74_Currying;