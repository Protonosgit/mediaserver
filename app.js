const NodeMediaServer = require("node-media-server");

console.log(process.env.HOST);
const config = {
  rtmp: {
    port: process.env.PORT,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60,
  },
  http: {
    port: 80,
    allow_origin: "*",
  },
};

var nms = new NodeMediaServer(config);
nms.run();
