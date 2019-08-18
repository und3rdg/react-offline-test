import React from 'react'
import {fuel_color} from './helpers'

const Legend = props => (
    <div>
        {props.names.map((name, idx) => <li
            key={idx}
            style={{backgroundColor: fuel_color({
                colors: props.colors,
                idx: idx,
            })}}
        >{name}</li>)}
    </div>
)
export {
    Legend
}
