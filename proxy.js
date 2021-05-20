const httpProxy = require("http-proxy");
const fs = require("fs");
httpProxy
  .createServer({
    target: {
      host: "localhost",
      port: 3000,
    },
    ssl: {
      key: fs.readFileSync("./key.pem", "utf8"),
      cert: fs.readFileSync("./cert.pem", "utf8"),
    },
  })
  .listen(4200);
