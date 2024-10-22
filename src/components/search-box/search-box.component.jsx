import PropTypes from 'prop-types';
import './search-box.styles.css';

const SearchBox = ({ onChangeHandler, placeholder = 'search...', className = '' }) => {
  const addClassNames = `search-box ${className}`.trim();

  return (
    <div>
      <input
        type="search"
        className={addClassNames}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};

SearchBox.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default SearchBox;
