import React from 'react'

const Legend = props => (
    <div>
        {props.names.map((name, idx) => <li key={idx}>{name}</li>)}
    </div>
)
export {
    Legend
}
