// const express = require("express");
// const repoContext = require('./repository/repository-wrapper');
// const { validateProduct } = require('./middleware/products-validation');
// const cors = require ("cors");



// const app = express(); 
// const dbURI = "mongodb+srv://knnthnwmn:Kmoney1@cluster0.q2igo.mongodb.net/kddagreat?retryWrites=true&w=majority"


// app.use(cors())
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));



// app.listen(8000, function () { npm start
//     console.log("Server started. Listening on port3000."); 
// });


// app.get('/api/songs', (req, res) => {
//     const songs = repoContext.songs.findAllSongs();
//     return res.send(songs);
// });

// app.post('/api/songs', (req, res) => {
//     const newSong = req.body;
//     const addedSong = repoContext.songs.createSong(newSong);
//     return res.send(addedSong);
// });    

// app.put('/api/songs/:id', (req, res) => {
//     const id = req.params.id;
//     const songPropertiesToUpdate = req.body;
//     const updatedSong = repoContext.songs.updateSong(id, songPropertiesToUpdate);
//     return res.send(updatedSong)
// });  


// app.delete('/api/songs/:id', (req, res) => {
//     const id = req.params.id;
//     const updatedDataSet = repoContext.songs.deleteSong(id);
//     return res.send(updatedDataSet);
//     });

const connectDB = require('./startup/db');
const express = require('express');
const app = express();
const products = require('./routes/products');


connectDB();

app.use(express.json());
app.use('/api/products', products);


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});

