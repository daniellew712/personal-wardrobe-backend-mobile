import express, { Request, Response } from 'express';

const router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', (req: Request, res: Response) => {
  res.send('Hello World!!!!!!');
});

export default router;
