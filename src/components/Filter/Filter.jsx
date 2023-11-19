import { Input, Label } from './Filter.styled';

export const Filter = ({ filter, onUpdate }) => {
  const handleChange = e => {
    onUpdate(e.target.value);
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filter} onChange={handleChange} />
    </Label>
  );
};
