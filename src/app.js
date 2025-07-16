// const templateExports = require("./js-foundation/01-template");
// require("./js-foundation/02-destructuring");

// const {getUserById} = require("./js-foundation/03-callbacks");

// const id = 1
// getUserById(id, (error, user)=>{
//     if(error){
//         throw new error('User not found with id: ',id)
//     }
//     console.log(user);

// })

// const { getAge } = require("./plugins/get-age.plugin");
// const { getUUID } = require("./plugins/get-uuid.plugin");

// const {buildMakePerson} = require('./js-foundation/05-factoryFunction')

// const makePerson = buildMakePerson({getAge,getUUID})

// const obj = {
//     name: 'Jhon',
//     birthdate: '1990-10-12'
// }

// const Jhon = makePerson(obj)

// console.log(Jhon);

const { getPokemonById } = require("./js-foundation/06-promises");

getPokemonById(1)
  .then((pokemon) => console.log("poke:", { pokemon }))
  .catch((err) => console.log({ err }))
  .finally(() => console.log("Bueno esto es el final del then."));

// Una funcion async es una funcion que regresa una promesa.
