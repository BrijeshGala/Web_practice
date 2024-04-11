
var events = require('events');
var em = new events.EventEmitter();

em.once('FirstEvent', function(data){
  console.log('FirstEvent callback: ' + data);
});

//Fire the Firstevent
em.emit('FirstEvent', 'This is event emitter');
console.log("fire the event again");
em.emit('FirstEvent', 'This is event emitter');