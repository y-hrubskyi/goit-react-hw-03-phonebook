import styled from 'styled-components';

export const Title = styled.h2`
  margin-bottom: 20px;
`;

export const ContactsList = styled.ul`
  list-style: disc;
`;

export const ContactData = styled.span`
  margin-right: 20px;
`;

export const Button = styled.button`
  font-size: 14px;

  background-color: transparent;
  border-color: #f1f1f1;
  border-radius: 4px;

  transition: color 250ms linear, background-color 250ms linear;

  &:hover,
  &:focus {
    background-color: blue;
    color: white;
  }
`;
