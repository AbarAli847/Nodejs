 const EventEmitter = require('events')

//  create an instance of EventEmitter
  const emitter = new EventEmitter


 //?  1. define an event listner
//   emitter.on('greet',() =>{
//     console.log('Abrar Ali')
//   })
//?   2. trigger (emit) the event "greet"
//   emitter.emit('greet')


    //! we can pass argument while emitting

//   emitter.on('greet',(username,prof) =>{
//     console.log(`name is: ${username},profession: ${prof}`)
//   })
//   emitter.emit('greet','Abrar Ali','software engineer')


//!    but the best thing to pass a single argument of an object

      emitter.on('greet',(arg) =>{
    console.log(`name: ${arg.name} , profession: ${arg.prof}`)
  })
  emitter.emit('greet',{ name: 'Abrar Ali', prof: 'software engineer'})