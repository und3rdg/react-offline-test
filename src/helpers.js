module.exports = {
    legend_names: legend_names,
}

function legend_names(arr) {
    const names = !!arr
        ? arr.map(el => el.fuel)
        : []
    return names
}
