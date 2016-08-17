// import request from 'request'
// import mongoose,{connection, Schema} from 'mongoose'
// var mongoose = require('mongoose')
// const {connection, Schema} = mongo
// import logAllProperties from './logAllProperties'
const bcrypt = require('bcryptjs')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
mongoose.Promise = global.Promise
const Schema=mongoose.Schema
var db = mongoose.connection

db.on('error', function(){
  console.log(`can't connect to DB`)
})

db.once('open', function(){
  console.log('Connection to DB')
})

//link
const personSchema = Schema({
  _id: Number,
  name: String,
  age: Number,
  stories: [{type: Number, ref: 'Story'}]
})

const StorySchema = Schema({
  title: String,
  creator: {type: Number, ref: 'Person'},
  fans: [{type: Number, ref: 'person'}]
})

const Story = mongoose.model('Story', StorySchema)
const Person = mongoose.model('Person', personSchema)

const clawnyeWest = new Person({
  _id: 0,
  name: 'Clawnye West',
  age: 77
})

const clawnyeStory = new Story({
  title: 'Once upon a time',
  creator: clawnyeWest._id
})

// clawnyeWest.save()
//   .then(Person =>console.log(Person))
//
// clawnyeStory.save()
//   .then(Story => console.log(Story))

Story.find({title: 'Once upon a time'})
  .populate('creator')
  .then(story => console.log(story))
// Mongoose.com/docs/
// var kittySchema = mongoose.Schema({
//   name: String
// });
//
// // var Kitten = mongoose.model('Kitten', kittySchema);
//
// kittySchema.methods.speak = function(){
//   var greeting = this.name? 'Meow name is '+ this.name: 'I do not have a name';
//   console.log(greeting);
// }
//
//
// var Kitten = mongoose.model('Kitten', kittySchema);
//
// var silence = new Kitten({ name:'Silence'});
// console.log(silence.name);
// //
// var fluffy = new Kitten({ name: 'fluffy'});
// fluffy.speak();
// //
// fluffy.save(function(err, fluffy){
//   if (err) return console.error(err);
//   fluffy.speak();
// });
// //
// Kitten.find(function(err, kittens){
//   if (err) return console.error(err);
//   console.log(kittens);
// })
//
// Kitten.find({name: /^fluff/})
//   .then(fluffy=>console.log(fluffy))

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
  // mongoose.Promise = global.Promise
  // mongoose.connect('mongodb://localhost/sandbox')
  // connection.on('error', console.error.bind(console, 'connection error: '))
  // connection.once('open', ()=> console.log('Connected to DB!'))

// const userSchema = new Schema({
//   name: String,
//   username: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   password: {
//     type: String,
//     require: true
//   },
//   admin: Boolean,
//   created_at:{
//     type: Date,
//     default: Date.now
//   },
//   updated_at: Date
// })
//
// userSchema.methods.encryptPassword = function(){
//   this.password = bcrypt.hashSync(this.password, 10)
//   return this.password
// }
//
// userSchema.methods={
//   encryptPassword: function(){
//
//     this.password = bcrypt.hashSync(this.password, 1)
//     return this.password
//   },
//   authenticate: function(plainPass){
//     return bcrypt.compareSync(plainPass, this.password)
//   }
// }
//
// userSchema.pre('save', function (next){
//
//   this.encryptPassword()
//
//   next()
// })
// //
// const User = mongoose.model('User', userSchema)
//
// const yasiel = User ({
//   name: 'caleo',
//   username: 'kleito',
//   password: 'kleo',
//   admin: true
// })
//
// const joe = User ({
//   name: 'joe',
//   username: 'world',
//   password:'joe',
//   admin: false
// })
//
//
    // joe.save()
    // .then(savedUser => console.log(`User ${savedUser.name} saved!`))
    // .catch(e=>console.log(e.message))

    // DELETE
 // User.findByIdAndRemove("57b3a2984244ee9405393d3e")
 //  .then(deleteUser => console.log(`You have deleted: ${deleteUser}`))
 //  .catch(e=>console.log(e.message))

  // UPDATE
// User.findById('57b3a359b040bc841f927528')
//   .then(userFromDB=>{
//     console.log(userFromDB)
//     Object.assign(userFromDB, {name:['Bob', 'joe', 'victor'], username:'new'})
//     console.log(userFromDB)
//     userFromDB.save()
//     .then(savedUser => console.log(`User ${savedUser.name} and ${savedUser.username} saved!`))
//     .catch(e=>console.log(e.message))
//   })
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
