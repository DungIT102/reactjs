import PropTypes from 'prop-types';
import { Component } from 'react';
import './search-box.styles.css';

class SearchBox extends Component {
  static propTypes = {
    onChangeHandler: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    placeholder: 'search...',
    className: '',
  };

  render() {
    const { onChangeHandler, placeholder, className } = this.props;
    const addClassNames = `search-box ${className}`.trim();

    console.log('rendering search box');
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
  }
}

export default SearchBox;
