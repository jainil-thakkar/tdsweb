const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();
const contactRoutes = require('./routes/contactRoutes'); // Ensure this path is correct

const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
    origin: 'https://your-frontend.onrender.com', // Update with your deployed frontend's URL
    optionsSuccessStatus: 200
};


app.use(cors(corsOptions));
app.use(express.json());

const mongoUri = process.env.MONGO_URI;
const client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

let db;
client.connect().then(() => {
    db = client.db('episodesDB'); // Connect once and use `db` throughout
    console.log('DB connected');
    app.listen(port, () => console.log(`Server running on port ${port}`));
});

// Contact route setup needs to be after setting up express.json() and cors
app.use('/api/contact', contactRoutes);

app.get('/api/episodes', async (req, res) => {
    const episodes = db.collection('episodes');
    const episodeList = await episodes.find({}).toArray();
    res.status(200).json(episodeList);
});

app.post('/api/episodes/:id/like', async (req, res) => {
    const episodeId = req.params.id;
    const episodes = db.collection('episodes');
    await episodes.updateOne({ _id: ObjectId(episodeId) }, { $inc: { likes: 1 } });
    res.status(200).send('Like added!');
});

app.post('/api/episodes/:id/dislike', async (req, res) => {
    const episodeId = req.params.id;
    const episodes = db.collection('episodes');
    await episodes.updateOne({ _id: ObjectId(episodeId) }, { $inc: { dislikes: 1 } });
    res.status(200).send('Dislike added!');
});

app.post('/api/episodes/:id/review', async (req, res) => {
    const episodeId = req.params.id;
    const { review } = req.body;
    const episodes = db.collection('episodes');
    await episodes.updateOne({ _id: ObjectId(episodeId) }, { $push: { reviews: review } });
    res.status(200).send('Review added!');
});
