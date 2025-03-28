const { connectDatabase } = require('./database/db');
const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes/routes');
const authMiddleware = require('./middleware/auth');

dotenv.config();
connectDatabase();

const app = express();

app.use(express.json());

app.use('/api/public', routes);

app.use('/api/protected', authMiddleware, routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
});
