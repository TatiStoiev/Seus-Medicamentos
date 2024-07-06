import { Request, Response, NextFunction } from 'express';

class Validations {
    static validateMedicamento(req: Request, res: Response, next: NextFunction): Response | void {
        const medicamento = req.body;
        const requestedKeys = ['nome', 'principioAtivo', 'apresentacao', 'uso', 'interacoesMedicamentosas'];
        const notFoundKey = requestedKeys.find((key) => !(key in medicamento));
        if (notFoundKey) {
            return res.status(400).json( { message: `${notFoundKey} é necessária` })
        }
        next();
    }
}

export default Validations;
