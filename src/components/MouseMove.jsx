import React from 'react';

export class MouseMove extends React.Component {
    state = {
        mouseX: 0,
        mouseY: 0,
    }

    mouseMoveHandler = (event) => {
        this.setState({
            mouseX: event.offsetX,
            mouseY: event.offsetY,
        })
    }

    componentDidMount() {
        window.addEventListener('mousemove', this.mouseMoveHandler)
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.mouseMoveHandler)
    }

    render() {
        return <div>
            <div>mouse Y: {this.state.mouseY}</div>
            <div>mouse X: {this.state.mouseX}</div>
        </div>
    }
}
