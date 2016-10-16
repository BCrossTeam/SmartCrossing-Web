import server from './server';
const app = server();


if (process.env.NODE_ENV !== 'production') {
  console.log('develpoment');
}



const port = (process.env.PORT || 3000)
app.listen(port, () => console.log('Listening at 3000'));
