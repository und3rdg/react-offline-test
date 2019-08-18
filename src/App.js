import React from 'react';
import axios from 'axios'
import {fuel_names, fuel_perc} from './helpers'
import {Legend} from './Legend'
import Pie_chart from './Pie_chart'

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
                "#dce8bf",
                "#bfe8d7",
                "#bfcce8",
                "#e0bfe8",
                "#ff8181",
                "#ffde81",
                "#acff81",
                "#81f3ff",
                "#e081ff",
                "#ffdede",
                "#b4d422",
                "#dee7ff",
                "#deffe8",
                "#fffcde",
                "#e8bfbf",
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
        const names = fuel_names(data.generationmix)
        const perc = fuel_perc(data.generationmix)
        const colors = this.state.colors

        const style = {
            wrap: {
            display: "grid",
            gridTemplateColumns: "200px 200px",
                gridGap: "10px",
            },
            title: {
                gridColumn: "1 / 3",
            }
        } 
        return (
            <div style={style.wrap}>
                <h1 style={style.title}>UK Energy Mix</h1>
                {!!names.length && <Legend  names={names} colors={colors} />}
                {!!names.length && <Pie_chart perc={perc} colors={colors} />}
            </div>
        )
    }
}
