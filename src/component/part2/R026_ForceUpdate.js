import React, {Component} from 'react';

class R026_ForceUpdate extends Component {
    constructor(props){
        super(props);
        this.state = {
            StateString: 'react',
        }
    }
    StateChage = (flag) => {
        this.state.StateString = '리액트';
        this.forceUpdate();
    }
    render() {
        return (
            <div style={{padding: "0px"}}>
                <button onClick={(e) => this.StateChage(e)}>state 직접 변경</button><br/>
                [state 변경하기] StateString : {this.state.StateString}
            </div>
        )
    }
}

export default R026_ForceUpdate;