import { Request, Response, NextFunction } from 'express';

class Validations {
    static validateMedicine(req: Request, res: Response, next: NextFunction): Response | void {
        const medicine = req.body;
        const requestedKeys = ['name', 'activePrinciple', 'composition', 'presentation', 'use', 'drugInteractions'];
        const notFoundKey = requestedKeys.find((key) => !(key in medicine));
        if (notFoundKey) {
            return res.status(400).json({ message: `The ${notFoundKey} field must be filled in` });
        }
        const emptyKey = requestedKeys.find((key) => medicine[key].trim() === '');
        if (emptyKey) {
            return res.status(400).json({
                 message: `The ${emptyKey} field must be filled in`,
            });
        }

        next();
    }

    static validateSearchByName(req: Request, res: Response, next: NextFunction): Response | void {
        const { name } = req.query;
        if (name === '') {
            return res.status(400).json({ message: 'The name field must be filled in' });
        }

        next();
    }

    static validateSearchByActivePrinciple(req: Request, res: Response, next: NextFunction): Response | void {
        const { activePrinciple } = req.query;
        if (activePrinciple === '') {
            return res.status(400).json({ message: 'The activePrinciple field must be filled in' });
        }

        next();
    }
}

export default Validations;
