const express = require('express');
const { getDB } = require('../config/db');
const router = express.Router();
const { ObjectId } = require('mongodb');


router.get('/count', async (req, res) => {
    try {
        const count = await getDB().collection('todo').countDocuments();
        res.status(200).json({ count });
    } catch (error) {
        console.error('Error fetching todo count:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
);


router.get('/', async (req, res) => {
    const {page} = req.query;
    const limit = 4;
    const skip = (page - 1) * limit;
    try {
        const todos = await getDB().collection('todo')
        .find()
        .skip(skip)
        .limit(limit)
        .sort({ updatedAt: -1 }) 
        .toArray();
        res.status(200).json({ todos });
    } catch (error) {
        console.error('Error fetching todos:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Invalid ID format' });
        }

        const todo = await getDB().collection('todo').findOne({ _id: new ObjectId(id) });

        if (!todo) {
            return res.status(404).json({ error: 'Todo not found' });
        }

        res.status(200).json({ todo });
    } catch (error) {
        console.error('Error fetching todo:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
);

router.post('/', async (req, res) => {
    try {
        const title = "New Addition";
        const content = "New Content";
        const newTodo = {
            title,
            content,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        const result = await getDB().collection('todo').insertOne(newTodo);
        res.status(201).json({ todo: { ...newTodo, _id: result.insertedId } });
    } catch (error) {
        console.error('Error creating todo:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;

        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Invalid ID format' });
        }

        const updatedTodo = {
            ...(title && { title }),
            ...(content && { content }),
            updatedAt: new Date(),
        };

        const result = await getDB().collection('todo').updateOne(
            { _id: new ObjectId(id) },
            { $set: updatedTodo }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({ error: 'Todo not found' });
        }

        res.status(200).json({ message: 'Todo updated successfully' });
    } catch (error) {
        console.error('Error updating todo:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Invalid ID format' });
        }

        const result = await getDB().collection('todo').deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Todo not found' });
        }

        res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
        console.error('Error deleting todo:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
);



module.exports = router;