import { Router } from 'express';
import medicineRouter from './Medicine.routes';
import medicineNameRouter from './MedicineSearchByName.routes';
import medicineActivePrincipleRouter from './MedicineSearchByActivePrinciple.routes';

const router = Router();

router.use('/medicine', medicineRouter);
router.use('/medicine/searchName', medicineNameRouter);
router.use('/medicine/searchActivePrinciple', medicineActivePrincipleRouter);

export default router; 