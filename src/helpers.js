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
