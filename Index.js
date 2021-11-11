const express = require("express");
const repoContext = require('./repository/repository-wrapper');
const { validateSongs } = require('./middleware/songs-validation');


const app = express(); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.listen(3000, function () { 
    console.log("Server started. Listening on port3000."); 
});


app.get('/api/songs', (req, res) => {
    const songs = repoContext.songs.findAllSongs();
    return res.send(songs);
});
   

app.post('/api/songs', [validateSongs], (req, res) => {
    const newSongs = req.body;
    const addedSongs = repoContext.songs.createSongs(newSongs);
    return res.send(addedSongs);
});
   

app.put('/api/songs/:id', [validateSongs], (req, res) => {
    const id = req.params.id;
    const songsPropertiesToUpdate = req.body;
    const updatedSongs = repoContext.songs.updateSongs(id, songsPropertiesToUpdate);
    return res.send(updatedSongs)
});
   
app.delete('/api/songs/:id', (req, res) => {
    const id = req.params.id;
    const updatedDataSet = repoContext.songs.deleteSongs(id);
    return res.send(updatedDataSet);
   });
   
   


    