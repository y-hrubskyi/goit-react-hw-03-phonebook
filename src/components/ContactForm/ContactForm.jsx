import { Formik } from 'formik';
import * as Yup from 'yup';

import { Button, ErrorMessage, Field, Form, Label } from './ContactForm.styled';

const contactsSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short').trim().required('Required'),
  number: Yup.string().min(7, 'Must be 7 or more').trim().required('Required'),
});

export const ContactForm = ({ onAdd }) => {
  const handleSubmit = (values, actions) => {
    const isAlreadyAdded = onAdd(values);
    if (!isAlreadyAdded) {
      actions.resetForm();
    }
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={contactsSchema}
    >
      <Form>
        <Label>
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="span" />
        </Label>

        <Label>
          Number
          <Field type="tel" name="number" />
          <ErrorMessage name="number" component="span" />
        </Label>

        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};
