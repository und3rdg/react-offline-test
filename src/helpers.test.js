const helpers = require("./helpers.js")

describe('fuel_names()', ()=> {
    const fuel_names = helpers.fuel_names([
        { "fuel": "biomass",
            "perc": 4.8
        }, {
            "fuel": "coal",
            "perc": 2.5
        },
    ])
    test('should be ok', ()=> expect(fuel_names).toEqual(["biomass", "coal"]))
})


describe('fuel_color()', ()=> {
    const fuel_color = helpers.fuel_color({
        colors: ["#c11", "#c22"],
        idx: 1,
    })
    test('should be ok', ()=> expect(fuel_color).toBe("#c22") )
})
