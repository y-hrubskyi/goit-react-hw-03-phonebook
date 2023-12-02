import { Formik } from 'formik';
import * as Yup from 'yup';

import { Form, Label, Field, Button, ErrorMessage } from './ContactForm.styled';

const contactsSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short').required('Required'),
  number: Yup.string().min(7, 'Must be 7 or more').required('Required'),
});

export const ContactForm = ({
  contact: { name, number },
  onSubmit,
  action,
}) => {
  return (
    <Formik
      initialValues={{ name, number }}
      onSubmit={onSubmit}
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

        <Button type="submit">{action}</Button>
      </Form>
    </Formik>
  );
};
