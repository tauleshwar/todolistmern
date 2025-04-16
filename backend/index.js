const express = require('express');
const { connectDB } = require('./config/db');
const todoRoutes = require('./routes/todoRoutes');
const cors = require('cors');
const app = express();
app.use(express.json());

app.use(cors());

app.use('/api/todos', todoRoutes);

const PORT = process.env.PORT;

connectDB().then(
    app.listen(PORT, () => {
        console.log(`Database connection successful`);
        console.log(`Server is running on port ${PORT}`);
    })
).catch((error) => {
    console.error('Error connecting to database:', error);
});
