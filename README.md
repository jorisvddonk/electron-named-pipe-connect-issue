This repository demonstrates an issue with Electron where connecting to a named pipe on Windows doesn't work correctly in the Renderer process: the connection will not be established until some other socket connection attempt is made.

Tested Electron versions:
* 1.4.4
* 1.6.3

Tested Windows versions:
* Windows 10 Pro Insider Preview, version 1607 build 15048.0
* Windows 10 Pro, version 1607 build 14393.693
* Windows 8.1 Pro

# Usage

1. Clone this repository
2. Run `npm install`
3. Start the server: `node server.js`. This will start a socket server on a named pipe, as well as on port 51978 bound to localhost.
4. Run the Electron app: `.\node_modules\electron\dist\electron.exe app\`
5. In the Electron app, click the 'Time named pipe connection' button. On affected systems, there will be no console output (the socket connection will NOT be established quickly).
6. In the Electron app, click the 'Time port connection' button. On all systems, this will cause the connection on port 51987 to be established. On affected systems, this will also cause the connection to the named pipe to be to suddenly be established.