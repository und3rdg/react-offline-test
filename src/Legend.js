import React from 'react'
import {fuel_color} from './helpers'

// It is one of not many examples where I will do inline css.
// Background color is strictly related to logic in JS and should be independent from CSS.
// Of course other way will be generating classNames for each color, but I'm using them not only here.
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
