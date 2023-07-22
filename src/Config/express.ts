import { express } from 'express';
import { cors } from 'cors';
const createServer =  (): express.Application => {
    const app = express();

    app.use(express.urlencode({extended : true}));
    app.use(cors());
    app.disable("x-powered-by");

    app.use()
}