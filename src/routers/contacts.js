import { Router } from 'express';

import {
  getContactsController,
  getContactByIdController,
  createContactController,
  deleteContactController,
  patchContactController,
} from '../controllers/contacts.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contacts.js';
import { checkUserId } from '../middlewares/checkUserId.js';

import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.use(authenticate);

router.use('/:userId', checkUserId);

router.get('/', ctrlWrapper(getContactsController));

router.get('/:contactId', ctrlWrapper(getContactByIdController));

router.post('/', validateBody(createContactSchema), ctrlWrapper(createContactController));

router.delete('/:contactId', ctrlWrapper(deleteContactController));

router.patch('/:contactId', validateBody(updateContactSchema), ctrlWrapper(patchContactController));



router.get('/', ctrlWrapper(getContactsController));

export default router;
