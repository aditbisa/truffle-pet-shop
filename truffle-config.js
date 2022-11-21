var os = require("os");

// Dev host in my WSL2
var devHost = "127.0.0.1";
if (os.homedir().startsWith("/home/adit")) {
  devHost = os.hostname() + ".local";
}

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: devHost,
      port: 7545,
      network_id: "*" // Match any network id
    },
    develop: {
      port: 8545
    }
  }
};
