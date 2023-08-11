const express = require('express');
const app = express();
const PORT = 3000;

// Use express to serve static files from the "public" directory
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
