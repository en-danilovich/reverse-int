module.exports = function reverse(n) {
    let nString = n.toString();
    return parseInt(nString.split('').reverse().join(''))
}
