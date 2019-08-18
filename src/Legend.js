import React from 'react'

const Legend = props => (
    <div>
        {props.names.map((name, idx) => <li
            key={idx}
            style={{backgroundColor: props.colors[idx]}}
        >{name}</li>)}
    </div>
)
export {
    Legend
}
