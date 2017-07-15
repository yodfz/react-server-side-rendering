import React from 'react';
import ButtonNormal from './components/ButtonNormal';

export default class Index extends React.Component {

    constructor () {
        super()
    };
    componentWillMount () {}
    componentDidMount  () {}
    shouldComponentUpdate () {return true;}
    componentWillUpdate () {}
    componentDidUpdate () {}
    componentWillUnmount () {}

    render () {
        return (<div>
            <h1>这是一个服务端渲染的react组件</h1>
            <p>
                <ButtonNormal>我是一个按钮</ButtonNormal>
            </p>
            <p>
                <ButtonNormal />
            </p>
        </div>);
    }
}