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
                // I like using this boolean for rapid switching between real api and raw JSON txt file.
                // Your API is light and fast, so I don't need it, but this this not always a case.
                dev: !!JSON.parse(window.sessionStorage.getItem('fake_api')),
                // I'm using this prop in test's. Web api and node api have a few differences
                // (setTimeout, xmlhttprequest(axios), fetch, FormData...)
                // If I don't want to loose a time for mocking, jsdom, passing functions via callback and other tricks,
                // I can simply disable part of code for test mode.
                test: !!props.test,
            },
            url: {
                api: 'https://api.carbonintensity.org.uk/generation',
                fake_api: 'NOT_IN_USE',
            },
            colors: [ "#dce8bf", "#bfe8d7", "#bfcce8", "#e0bfe8", "#ff8181", "#ffde81", "#acff81", "#81f3ff", "#e081ff", "#ffdede", "#b4d422", "#dee7ff", "#deffe8", "#fffcde", "#e8bfbf", ], // eslint-disable-line max-len
            lang: {
                title: "UK Energy Mix",
            },
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
        const {colors, lang} = this.state
        // probably it overkill for this particular scenario
        // but I was want to show TDD and how I'm reading state
        // I like pure functions without side effects
        // In similar way I'm dealing with setState() (or Context/Redux)
        const names = fuel_names(data.generationmix) 
        const perc = fuel_perc(data.generationmix)

        // I have a strong opinion about inline CSS from JS
        // It is big NO NO NO!
        // However I'm often using it for early prototypes when I
        // need temporary primitive layout.
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
                <h1 style={style.title}>{lang.title}</h1>
                {!!names.length && <Legend  names={names} colors={colors} />}
                {!!names.length && <Pie_chart perc={perc} colors={colors} />}
            </div>
        )
    }
}
