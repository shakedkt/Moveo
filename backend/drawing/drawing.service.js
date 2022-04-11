
async function queryCanvas(data) {
    let canvas; 
    try {
        canvas = data
    }
    catch (err) {
        console.log('Error: cannot find product');
        throw err
    }
    return canvas
}

async function setFirstUser(data) {
    let isFirstUser 
    try {
        isFirstUser = data
    }
    catch (err) {
        console.log('Error: cannot find product');
        throw err
    }
    return isFirstUser
}



async function setCanvas(data) {
    let canvas 
    try {
        isFirstUser = data
    }
    catch (err) {
        console.log('Error: cannot find product');
        throw err
    }
    return canvas
}

module.exports = {
    queryCanvas,
    setFirstUser,
    setCanvas
}