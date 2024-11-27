import express from 'express';
import cors from 'cors';

import ErrorResponse from './utils/ErrorResponse.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();
const port = process.env.PORT || 8080;

//prevents CORS error when working with frontend
app.use(cors({ origin: '*' }));

//will return a 404 if a request is sent to an endpoint we haven't created
app.use('/*', (req, res) => {
    throw new ErrorResponse('Not Found', 404);
});

//the entire application will use our custom errorHandler
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));
