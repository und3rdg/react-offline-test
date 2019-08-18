import React from 'react';
import axios from 'axios'
import {legend_names} from './helpers'
import {Legend} from './Legend'

export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data:{},
            mode: {
                dev: !!JSON.parse(window.sessionStorage.getItem('fake_api')),
                test: !!props.test,
            },
            url: {
                api: 'https://api.carbonintensity.org.uk/generation',
            },
            colors: [
                "#b4d422",
                "#ffdede",
                "#dee7ff",
                "#deffe8",
                "#fffcde",
                "#e8bfbf",
                "#dce8bf",
                "#bfe8d7",
                "#bfcce8",
                "#e0bfe8",
                "#ff8181",
                "#ffde81",
                "#acff81",
                "#81f3ff",
                "#e081ff",
            ]
        }

        const {mode, url} = this.state
        if(!mode.test) {
            axios.get(url.api)
                .then(res=>{
                    this.setState(res.data)
                })
                .catch(err=>console.error(err))
        }

    }
    
    render() {
        const data = !!this.state.data && this.state.data
        const names = legend_names(data.generationmix)
        const colors = this.state.colors
        return (
            <div className="wrap">
                <h1>UK Energy Mix</h1>
                {!!names.length && <Legend names={names} colors={colors} />}
                <pre>tmp: {JSON.stringify(data, null, 4)}</pre>
            </div>
        )
    }
}
