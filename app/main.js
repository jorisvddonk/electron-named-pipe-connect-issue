const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');
var window;

app.on('ready', function(){
  window = new BrowserWindow({width: 800, height: 600});
  window.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html')
  }));
  window.webContents.openDevTools();
  window.on('closed', function(){
    window = null;
  });
});

app.on('window-all-closed', function(){
  app.quit();
});

console.log("Testing named pipe connection in Main Process...")
require('./client.js').timeNamedPipeConnect();