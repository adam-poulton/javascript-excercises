const removeFromArray = function() {
    let args = [...arguments]
    let array = args.shift()
    args.forEach(item => {
        let index = array.indexOf(item);
        if (index != -1) array.splice(index, 1);
    })
    return array;
}

module.exports = removeFromArray
