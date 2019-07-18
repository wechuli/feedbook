//importing the node modules
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

//Instantiate the app
const app = express();


// Add necessary middleware
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}))












const PORT = process.env.PORT || 8090;

app.listen(PORT, () => {
    console.info(`Server running on port ${PORT}`)
})