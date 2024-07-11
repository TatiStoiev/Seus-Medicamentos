import { Request, Response, NextFunction } from 'express';

class Validations {

    static validateMedicamento(req: Request, res: Response, next: NextFunction): Response | void {
        const medicamento = req.body;
        const requestedKeys = ['nome', 'principioAtivo', 'apresentacao', 'uso', 'interacoesMedicamentosas'];
        const notFoundKey = requestedKeys.find((key) => !(key in medicamento));
        if (notFoundKey) {
            return res.status(400).json( { message: `O campo ${notFoundKey} é necessário` })
        }
        const emptyKey = requestedKeys.find((key) => medicamento[key].trim() === '' );
        if (emptyKey) {
            return res.status(400).json( {
                 message: `O campo ${emptyKey} não pode estar vazio`
            });
        }

        next();
    }

    static validateSearchByName(req: Request, res: Response, next: NextFunction): Response | void {

        const { nome } = req.query;
        if (nome === '') {
            return res.status(400).json( { message: 'O campo nome deve estar preenchido' });
        }

        next();
    }

    static validateSearchByPrincipioAtivo(req: Request, res: Response, next: NextFunction): Response | void {

        const { principioAtivo } = req.query;
        if (principioAtivo === '') {
            return res.status(400).json( { message: 'O campo principioAtivo deve estar preenchido' });
        }

        next();
    }
}

export default Validations;
