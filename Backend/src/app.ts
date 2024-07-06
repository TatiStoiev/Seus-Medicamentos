import express from 'express';
import router from './routes';

class App {
    public app: express.Express;

    constructor() {
        this.app = express();

        this.app.use(express.json());

        this.routes();
    }

    private routes(): void {
        this.app.use(router);
    }

    public start(PORT: string | number): void {
        this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
    }
}

export { App };