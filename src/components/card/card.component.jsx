import PropTypes from 'prop-types';
import { Component } from 'react';
import './card.styles.css';

class CardList extends Component {
  static propTypes = {
    monster: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    const { id, name, email } = this.props.monster;
    return (
      <div className="card-container">
        <img
          alt={`monster ${name}`}
          className="card-image"
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h2 className="card-name">{name}</h2>
        <p className="card-email">{email}</p>
      </div>
    );
  }
}

export default CardList;
