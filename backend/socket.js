const ComplianceMetric = require('./models/ComplianceMetric');

module.exports = (server) => {
  const io = require('socket.io')(server, {
    cors: {
      origin: '*',
    },
  });

  io.on('connection', (socket) => {
    console.log('Client connected');

    const interval = setInterval(async () => {
      const data = await ComplianceMetric.findOne().sort({ updatedAt: -1 });
      socket.emit('metricUpdate', data);
    }, 3000);

    socket.on('disconnect', () => {
      console.log('Client disconnected');
      clearInterval(interval);
    });
  });
};
