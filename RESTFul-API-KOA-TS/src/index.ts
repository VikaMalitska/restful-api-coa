import App from './app/app';
import Server from './server';

const app = new App();

new Server(app.getInstance()).start();
