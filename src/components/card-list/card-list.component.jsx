import PropTypes from 'prop-types';
import { Component } from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';

class CardList extends Component {
  static propTypes = {
    monsters: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  render() {
    const { monsters } = this.props;
    console.log('rendering card list');

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { id } = monster;
          return <Card key={id} monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
