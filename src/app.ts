import express from 'express';
import cors from 'cors'
import router from "../src/routes/index";
 const app = express();
 let corsOptions = {
	origin: '*',
};
app.use(express.json({ limit: '50mb' }));
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors(corsOptions));

app.use(express.json());

router(app);

export default  app;