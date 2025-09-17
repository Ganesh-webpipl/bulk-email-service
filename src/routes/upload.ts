import { Router } from 'express';
import { upload } from '../utils/multer';
import { handleJsonUpload } from '../controllers/mailController';
// import { bulkUploadValidation } from '../validation/bulkUploadValidation';

const router = Router();

router.post('/', handleJsonUpload);

export default router;
