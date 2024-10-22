import PropTypes from 'prop-types';
import './card.styles.css';

const Card = ({ monster }) => {
  const { id, name, email } = monster;
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
};

Card.propTypes = {
  monster: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
