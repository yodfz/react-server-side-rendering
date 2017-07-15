import React, {Component} from 'react';

export default class ButtonNormal extends Component {

    constructor (props) {
        super(props);
        this.state={
            text:props.children||props.text||'确定'
        }
    };
    componentWillMount () {}
    componentDidMount  () {}
    shouldComponentUpdate () {return true;}
    componentWillUpdate () {}
    componentDidUpdate () {}
    componentWillUnmount () {}

    render () {
        return (
            <button>{this.state.text}</button>
        );
    }
}