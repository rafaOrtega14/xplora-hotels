import app from './routes';
import './db/connection'

const PORT: Number = 3001;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});