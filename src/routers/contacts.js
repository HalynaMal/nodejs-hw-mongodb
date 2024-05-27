import { Router } from "express";
//import { getAllContacts, getContactById } from "../services/contacts";

import { getContactsController, getContactByIdController } from "../controllers/contacts";

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/contacts', ctrlWrapper(getContactsController));

    
//     async (req, res) => {
//     const contacts = await getAllContacts();

//     res.status(200).json({
//         data: contacts,
//     });
// });

router.get('/contacts/:contactId', ctrlWrapper(getContactByIdController));
    
//     async (req, res) => {
//     const { contactId } = req.params;
//     const contact = await getContactById(contactId);

//     res.status(200).json({
//         data: contact,
//     });
// });

export default router;