import { ContactCollection } from '../db/contact.js';


export const getAllContacts = async () => {
  const contacts = await ContactCollection.find();
  return contacts;
};

export const getContactById = async (contactId) => {
  const contact = await ContactCollection.findById(contactId);
  return contact;
};

export const createContact = async (payload) => {
  const contact = await ContactCollection.create(payload);
  return contact;
};

export const deleteContact = async (contactId) => {
  const contact = await ContactCollection.findOneAndDelete({
    _id: contactId,
  });
  return contact;
};

export const updateContact = async (id, payload, options = {}) => {
  const rawResult = await ContactCollection.findOneAndUpdate({ _id: id }, payload, { new: true, includeResultMetadata: true, ...options, },);

  if (!rawResult || !rawResult.value) return null;
  return {
    contact: rawResult,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};

