import App from './app';

function greet(name: string) {
    console.log(`Hello, ${name}.`);
}

greet('Tim');

const app = new App();
app.init();
