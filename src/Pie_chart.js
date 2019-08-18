import React from 'react'
import ReactDOM from 'react-dom';
import {fuel_color} from './helpers'


export default class Pie_chart extends React.Component {
    componentDidMount() {
        if(!!this.props.test) { return }
        let canvas = ReactDOM.findDOMNode(this.refs.canvas)
        let ctx = canvas.getContext('2d')

        const c = {
            x: 75,
            y: 75,
            radius: 70,
            start: 0,
            len: 0,
        }
        const txt = []

        const draw_pie = this.draw_pie
        this.props.perc.forEach((fuel_perc, idx) => {
            c.len = 2 * Math.PI * fuel_perc / 100

            // canvas for pie chart
            ctx.beginPath()
            ctx.fillStyle = fuel_color({ colors: this.props.colors, idx: idx, })
            ctx.moveTo(c.x, c.y)
            ctx.arc(c.x, c.y, c.radius, c.start, c.start + c.len)
            ctx.lineTo(c.x, c.y)
            ctx.stroke()
            ctx.fill()
            ctx.closePath()

            if(fuel_perc > 5) {
                txt.push({
                    angle: (c.start + c.len / 2 + Math.PI) + Math.PI,
                    label: fuel_perc,
                })
            }

            c.start += c.len
        })


        // canvas for percent labels
        txt.forEach(el => {
            const txt_rad = c.radius * 3/4
            ctx.strokeStyle = "#000"
            ctx.fillStyle = "#000"
            ctx.fillText(
                el.label+"%",
                c.x - 6 + txt_rad * Math.cos(el.angle),
                c.y + 4 + txt_rad * Math.sin(el.angle)
            )
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

