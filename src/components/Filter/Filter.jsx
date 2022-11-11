import PropTypes from 'prop-types';

import { StyledInput } from 'components/StyledComponents';

import { StyledFilter } from './StyledComponents';

export const Filter = ({ handleFilterChange }) => {
  return (
    <StyledFilter>
      <label htmlFor="filter">Find contacts by name</label>
      <StyledInput
        id="filter"
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleFilterChange}
      />
    </StyledFilter>
  );
};

Filter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};
