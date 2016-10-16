import server from './server';
const app = server();



const port = (process.env.PORT || 3000)
app.listen(port, () => console.log('Listening at 3000'));
