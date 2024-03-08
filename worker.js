const ports = [];

self.onconnect = function(e) {
  const port = e.ports[0];
  ports.push(port);

  port.onmessage = function(e) {
    ports.forEach(function(port) {
      port.postMessage(e.data);
    });
  }
}