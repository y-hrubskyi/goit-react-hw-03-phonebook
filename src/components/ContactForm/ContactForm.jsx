import { ErrorMessage, Formik } from 'formik';
import { object, string } from 'yup';

import { AddContactForm, Button, Input, Label } from './ContactForm.styled';

const initialValues = { name: '', number: '' };

const nameRegex =
  /^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const numberRegex =
  /\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/;
const schema = object({
  name: string().matches(nameRegex).required(),
  number: string().matches(numberRegex).required(),
});

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    const isAlreadyAdded = onSubmit(values);
    if (!isAlreadyAdded) actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <AddContactForm>
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" name="name" />
        <ErrorMessage component="span" name="name" />

        <Label htmlFor="number">Number</Label>
        <Input type="tel" id="number" name="number" />
        <ErrorMessage component="p" name="number" />

        <Button type="submit">Add contact</Button>
      </AddContactForm>
    </Formik>
  );
};