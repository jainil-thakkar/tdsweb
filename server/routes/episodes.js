module.exports = (client) => {
    const express = require('express');
    const router = express.Router();
    const db = client.db("yourDatabaseName");
    const collection = db.collection("episodes");

    // Get all episodes
    router.get('/', async (req, res) => {
        try {
            const episodes = await collection.find({}).toArray();
            res.status(200).json(episodes);
        } catch (error) {
            res.status(500).json({ error: error.toString() });
        }
    });

    // Increment likes
router.post('/:id/like', async (req, res) => {
    const { id } = req.params;
    try {
        const collection = await connectDB();
        await collection.updateOne({ _id: ObjectId(id) }, { $inc: { likes: 1 } });
        res.status(200).json({ message: 'Like added' });
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
});

// Increment dislikes
router.post('/:id/dislike', async (req, res) => {
    const { id } = req.params;
    try {
        const collection = await connectDB();
        await collection.updateOne({ _id: ObjectId(id) }, { $inc: { dislikes: 1 } });
        res.status(200).json({ message: 'Dislike added' });
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
});

// Add a review
router.post('/:id/review', async (req, res) => {
    const { id } = req.params;
    const { review } = req.body;
    try {
        const collection = await connectDB();
        await collection.updateOne({ _id: ObjectId(id) }, { $push: { reviews: review } });
        res.status(200).json({ message: 'Review added' });
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
});

    // More routes can be added here

    return router;
};
