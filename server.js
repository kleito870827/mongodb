import request from 'request'
import mongoose,{connection, Schema} from 'mongoose'
// var mongoose = require('mongoose')
// const {connection, Schema} = mongo
// import logAllProperties from './logAllProperties'
var bcrypt = require('bcryptjs')

// console.log('yo')
// const witch = "I'll get you, my pretty... and your little dog too!"
// const scarecrow = "Some people without brains do an awful lot of talking."
// const glinda = "Be gone! Before someone drops a house on you!"
// const dorothy = "There's no place like home."
// const lion = "Come on, get up and fight, you shivering junkyard!"
// const wizard = "Do not arouse the wrath of the great and powerful Oz!"
// const tinman = "Now I know I have a heart, because it's breaking"

// String.prototype.countAll = function(letterToSearchFor){
//   let letterCount = 0
//   for (var i = 0; i < this.length; i++) {
//     if (this[i].toUpperCase() === letterToSearchFor.toUpperCase()) {
//       letterCount ++
//     }
// }
// return letterCount
// }
// console.log(witch.countAll('o'));
//
// //Contructors
// var shoe = {size:10, gender: 'f', style:'slipper'}
//
// let magicShoe = Object.create(shoe)
//
// magicShoe.jewels = 'rubies'
//
// //console.log(magicShoe.isPrototypeOf(shoe));
//
// function shoe(size, color, gender, style){
//   this.size=size
//   this.color=color
//   this.gender=gender
//   this.style=style
//   }
//   shoe.prototype={
//     putOn: function(){
//       console.log(`shoes on! ${this.style}`);
//     },
//     takeOff: function(){
//       console.log(`Take off you ${this.style}s`);
//     }
//   }
//
//
//
// const workShoe = new Shoes(10, 'brown', 'f', 'boot')
// //console.log(workShoe.gender);
//
// workShoe.putOn()
// workShoe.takeOff()

// const promise = num => new promise (function (resolve){
//   const double = num+num
//   resolve(double)
// })
// promise(2)
//   .then(results => console.log(results))
// const getResultsFromServer1 = resource => new Promise ((resolve, reject)=>{
//   const url = `http://jsonplaceholder.typicode.com/${resource}`
//
//   request(url, (error, response, body)=>{
//     if(!error && response.statusCode === 200){
//       resolve(body)
//     }else{
//       reject(console.log('no dice'))
//     }
//   })
// });

// getResultsFromServer('users')
//   .then(string => JSON.parse(string))
//   // .then(user =>user.filter(u=>u.company.name === 'Abernathy Group'))
//   // .then(user => user.filter(u => /C/.test(u.name) && /33263/.test(u.address.zipcode)))
//   // .then(user => user.filter(u => /.net/.test(u.website)))
//   //.then(user => user.filter(u => /1-/.test(u.phone)))
//   .then(user => user.filter(u => /Apt/.test(u.address.suite)))
//   .then
//   .then(clementine => console.log(clementine))

// getResultsFromServer1('users')
//   .then(string => JSON.parse(string))
//   .then(photo => photo.filter(p=> p.title === "accusamus ea aliquid et amet sequi nemo"))
//   .then(photo => console.log(photo))
//
//   const getResultsFromServer2 = resource => new Promise ((resolve, reject)=>{
//     const url = `http://jsonplaceholder.typicode.com/${resource}`
//
//     request(url, (error, response, body)=>{
//       if(!error && response.statusCode === 200){
//         resolve(body)
//       }else{
//         reject(console.log('no dice'))
//       }
//     })
//   });
//
//   getResultsFromServer2('photos')
//     .then(string => JSON.parse(string))
//     .then(photo => photo.filter(p=> p.title === "accusamus ea aliquid et amet sequi nemo"))
//     .then(photo => console.log(photo))

//mongoose
  mongoose.Promise = global.Promise
  mongoose.connect('mongodb://localhost/sandbox')
  connection.on('error', console.error.bind(console, 'connection error: '))
  connection.once('open', ()=> console.log('Connected to DB!'))

const userSchema = new Schema({
  name: String,
  username: {
    type: String,
    // required: true,
    // unique: true
  },
  password: {
    type: String,
    // require: true
  },
  admin: Boolean,
  created_at:{
    type: Date,
    default: Date.now
  },
  updated_at: Date
})

// userSchema.methods.encryptPassword = function(){
//   this.password = bcrypt.hashSync(this.password, 10)
//   return this.password
// }

userSchema.methods={
  encryptPassword: function(){

    this.password = bcrypt.hashSync(this.password, 0)
    return this.password
  },
  // authenticate: function(plainPass){
  //   return bcrypt.compareSync(plainPass, this.password)
  // }
}

userSchema.pre('save', function (next){

  this.encryptPassword()

  next()
})

const User = mongoose.model('User', userSchema)

const yasiel = User ({
  name: 'caleo',
  username: 'kleito',
  password: 'kleo',
  admin: true
})

const joe = User ({
  name: 'joe',
  username: 'world',
  password:'joe',
  admin: false
})


    joe.save()
    .then(savedUser => console.log(`User ${savedUser.name} saved!`))
    .catch(e=>console.log(e.message))

  //   joe.save()
  //  .then(savedUser => console.log(`User ${savedUser.name} saved!`))
  //  .catch(e=>console.log(e.message))

  //  User.find()
  //  .then(allUsers=> console.log(allUsers))
  //  .catch(e=>console.log(e.message))
  //
  // User.findById('#')
  // .then(allUsers=>console.log(allUsers))
  // .catch(e=>console.log(e.message))

  // let time = new Date()
  // time.setMinutes(time.getMinutes() -1)

  // User.find({admin:true})
  // User.find({admin:true}).where('create_at').lt(time)
  // .then(recentAdmins=> console.log(recentAdmins))
  // .catch(e=>console.log(e.message))
