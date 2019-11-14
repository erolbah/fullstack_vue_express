const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require ('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.unsubscribe(cors());

const port = process.env.PORT || 8000

app.listen(port, () => console.log(`Server started on port ${port}`));