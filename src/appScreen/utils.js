export function sortBySize(arr) {
    return arr.sort((a, b) => b.size_sqm - a.size_sqm);
}

export function sortByPrice(arr) {
    return arr.sort((a, b) => b.price_sqm - a.price_sqm);
}

export function sortByAge(arr) {
    return arr.sort((a, b) => b.built_year - a.built_year);
}

export function order(arr) {
    return arr.reverse();
}
