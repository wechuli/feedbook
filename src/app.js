const express = require('express');


const app = express();











const PORT = process.env.PORT || 8090;

app.listen(PORT, () => {
    console.info(`Server running on port ${PORT}`)
})