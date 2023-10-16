import express from "express";
const app = express();

app.get('/', (req, res) => {
   res.send('Exoress Vercel app response'); 
});

app.listen(5000, (req, res) =>  {
    console.log('listening on port');
});