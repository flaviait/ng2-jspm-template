module.exports = server => {
  return require("chokidar-socket-emitter")({
    app: server,
    port: !server && require("../config.json").port.hmr,
    path: "src",
    chokidar: {
      ignored: /___jb_tmp___$/ // IntelliJ Idea creates and removes a temporary file on each save
    }
  });
};