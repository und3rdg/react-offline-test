const helpers = require("./helpers.js")

describe('legend_names()', ()=> {
    const legend_names = helpers.legend_names([
        { "fuel": "biomass",
            "perc": 4.8
        }, {
            "fuel": "coal",
            "perc": 2.5
        },
    ])
    test.skip('should be ok', ()=> expect(legend_names).toBe(["biomass", "coal"]))
})
