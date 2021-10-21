import PropTypes from 'prop-types';
import './Painting.css';
import defaultImage from './default.jpg';

export default function Painting({
  imageUrl = defaultImage,
  title,
  profileUrl,
  author = 'unknown',
  price,
  quantity,
}) {
  return (
    <div className="Painting">
      <img src={imageUrl ?? defaultImage} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Author: <a href={profileUrl}>{author}</a>
      </p>
      <p>Price: {price}dollars</p>
      <p>Avaliable: {quantity < 10 ? 'sorry, but NO' : 'Yes, you get it'}</p>
      <button type="button">Add to bin</button>
    </div>
  );
}

Painting.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
