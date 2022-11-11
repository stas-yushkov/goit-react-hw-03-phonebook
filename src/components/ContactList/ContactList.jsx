import { PropTypes } from 'prop-types';

import { StyledButton } from 'components/StyledComponents';

import { StyledList, ListItem, ItemText } from './StyledComponents';

export const ContactList = ({ contactList, onDelete }) => {
  return (
    <StyledList>
      {contactList.map(({ id, name, number }) => (
        <ListItem key={id}>
          <ItemText>{`${name}: ${number}`}</ItemText>
          <StyledButton onClick={() => onDelete(id)} type="button">
            Delete
          </StyledButton>
        </ListItem>
      ))}
    </StyledList>
  );
};

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
