import axios from 'axios';
import React, {Component, useEffect, useState} from 'react';


class R064_PromiseThen extends Component{
    componentDidMount () {
        new Promise(resolve => {
            setTimeout(function() {
                resolve('react');
            }, 1500)
        }).then(function(result){
            console.log(result);
            return result + 200;
        })
        .then(result => {
            console.log(result);
        })
    }

    render() {
        return (
            <h1>Promise</h1>
        )
    }
}
export default R064_PromiseThen;