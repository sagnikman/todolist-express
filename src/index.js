const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) =>{
    res.send('<h3>API Documentation:</h3><a href="https://github.com/sagnikman/todolist-express#api-documentation">Link</a>');
});

app.use('/api', apiRoutes);

PORT = ServerConfig.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Successfully started the server on PORT : ${PORT}`);
});
