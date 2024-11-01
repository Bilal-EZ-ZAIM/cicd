const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.json({
        status:200,
        message: '5adam'
    });
});

app.listen(8080, () => {
    console.log(`Server is running on port 8080`);
});

module.exports = app;


