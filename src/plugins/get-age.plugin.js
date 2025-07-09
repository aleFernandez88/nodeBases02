const getAgePlugin = require('get-age');

const getAge = (brithday) => {
    if(!brithday) throw new( error, 'Brithday is required.')

        return getAgePlugin(brithday)
}

module.exports = {
    getAge,
}