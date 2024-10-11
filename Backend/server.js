import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';

const app = express();
app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'hmj',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

app.post('/api/aspirations', async (req, res) => {
  try {
    const { content } = req.body;
    const [result] = await pool.execute(
      'INSERT INTO aspirations (content, created_at) VALUES (?, NOW())',
      [content]
    );
    res.status(201).json({ message: 'Aspiration submitted successfully', id: result.insertId });
  } catch (error) {
    console.error('Error inserting aspiration:', error);
    res.status(500).json({ message: 'An error occurred while submitting the aspiration' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});