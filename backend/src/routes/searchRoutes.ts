import { Router } from 'express';
import { searchCompanies } from '../controllers/searchController';

const router = Router();

router.get('/', searchCompanies);

export default router;