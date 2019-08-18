import React from 'react'
import ReactDOM from 'react-dom';
import {fuel_color} from './helpers'


export default class Pie_chart extends React.Component {
    componentDidMount() {
        if(!!this.props.test) { return }
        let canvas = ReactDOM.findDOMNode(this.refs.canvas)
        let ctx = canvas.getContext('2d')

        const c = {
            x: 50,
            y: 50,
            radius: 50,
            start: 0,
            len: 0,
        }

        this.props.perc.forEach((fuel_perc, idx) => {
            c.len = 2 * Math.PI * fuel_perc / 100

            ctx.beginPath()
            ctx.fillStyle = fuel_color({ colors: this.props.colors, idx: idx, })
            ctx.moveTo(c.x, c.y)
            ctx.arc(c.x, c.y, c.radius, c.start - 100, c.start + c.len - 100)
            ctx.lineTo(c.x, c.y)
            ctx.stroke()
            ctx.fill()
            ctx.closePath()

            c.start += c.len
        })

    }

    render() {
        return (
            <div>
                <canvas ref="canvas" />
            </div>
        )
    }
}
