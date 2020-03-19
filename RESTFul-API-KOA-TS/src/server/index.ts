import * as Koa from 'koa';
import * as net from 'net';

const DEFAULT_PORT = 3001;
export default class Server {

    constructor(public app: Koa) {
    }
  
    public start(port?: number): net.Server {
      const finalPort = port || DEFAULT_PORT;
  
      process.stdout.write(`Contacts App listening on port ${finalPort}`);
      return this.app.listen(finalPort);
    }
  }
