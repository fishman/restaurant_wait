var models = require('./models')
  , Restaurant = models.Restaurant
;

module.exports = function(io) {

  io.sockets.on('connection', function(socket) {
    socket.on('waitTime', function(data) {

      Restaurant.findById(data.restaurant, function(err, restaurant) {

        restaurant.declareWaitTime(data.option, socket.handshake.sessionID);
        restaurant.save(); // We don't need to wait for the save to succeed
        socket.emit('restaurant', restaurant); // Send the updated restaurant
      });
    });
  });
}
