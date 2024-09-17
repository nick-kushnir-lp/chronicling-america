import { Router } from 'express';
import { getCompanyById } from '../controllers/companyController';

const router = Router();

router.get('/:id', getCompanyById);

export default router;