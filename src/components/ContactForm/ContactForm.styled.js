import { Field, Form } from 'formik';
import styled from 'styled-components';

export const Title = styled.h2`
  margin-bottom: 20px;
`;

export const AddContactForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px;
  margin-bottom: 20px;

  border: 1px solid black;
  border-radius: 8px;
`;

export const Label = styled.label`
  margin-bottom: 8px;
`;

export const Input = styled(Field)`
  margin-bottom: 16px;

  border-radius: 4px;
  outline-color: blue;
`;

export const Button = styled.button`
  padding: 4px 12px;

  border-radius: 8px;
  background-color: transparent;

  transition: color 250ms linear, background-color 250ms linear;

  &:hover,
  &:focus {
    background-color: blue;
    color: white;
  }
`;
