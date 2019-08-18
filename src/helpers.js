module.exports = {
    fuel_names: fuel_names,
    fuel_color: fuel_color,
    fuel_perc: fuel_perc,
}

function fuel_names(arr) {
    const names = !!arr
        ? arr.map(el => el.fuel)
        : []
    return names
}

function fuel_color({colors, idx}) {
    return colors[idx]
}


function fuel_perc(arr) {
    const perc = !!arr
        ? arr.map(el => el.perc)
        : []
    return perc
}

// Probably I should introduce here some oop, mabe something like:
// function fuel({arr, idx}) {
//     return {
//         names: fuel_names(arr),
//         color: !!idx && fuel_color({colors: arr, idx: idx}),
//         perc: fuel_perc(arr),
//     }
// }
// But is is already overkill for this small app.
