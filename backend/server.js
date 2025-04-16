const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const cors = require('cors');
const socketSetup = require('./socket');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/pci', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const server = http.createServer(app);
socketSetup(server);

const PORT = 4000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
