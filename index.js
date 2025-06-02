const express = require('express');
const cors = require('cors'); // Add this line

const app = express();

// CORS FIX - Add this block
app.use(cors({
  origin: [
    'https://zaffy-frontend.vercel.app', 
    'http://localhost:3000'
  ],
  methods: ['GET', 'POST']
}));

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const queryRoute = require('./routes/query');
app.use('/api/query', queryRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Zaffy AI server running on port ${PORT}`));
app.get("/", (req, res) => {
  res.json({ message: "Zaffy is live" });
});
