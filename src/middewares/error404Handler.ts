import { RequestHandler } from 'express';

export const handle404Error: RequestHandler = (req, res) => {
  res.status(404);
  if (req.accepts('json')) {
    res.status(404).json({
      statusCode: 404,
      errorCode: 'NOT_FOUND',
      message: '404 Not Found',
    });
  } else {
    res.type('text').send('404 Not Found');
  }
};

export const handleHomeController: RequestHandler = (req, res): void => {
  res.status(200);
  if (req.accepts('json')) {
    res.status(200).json({ message: 'Welcome to FTS' });
  } else {
    res.type('text').send('Welcome to FTS');
  }
};
