function startApp(onStart) {
  var global = window;  
  var app = global.Verbivore.application = new global.Verbivore.Application();
 
  if (onStart) {
    app.on('start', onStart);
  }

  app.start();
}