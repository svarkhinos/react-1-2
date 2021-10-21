// import './Alert.css';
import PropTypes from 'prop-types';
import s from './Alert.module.css';

function Alert({ text, type }) {
  return (
    <p role="alert" className={s[type]}>
      {text}
    </p>
  );
}

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'warning', 'error']).isRequired,
};

// без модулей, для файла alert.css
// function Alert({ text, type = 'success' }) {
//   return (
//     <p role="alert" className={`Alert Alert--${type}`}>
//       {text}
//     </p>
//   );
// }

// Alert.propTypes = {
//   text: PropTypes.string.isRequired,
//   type: PropTypes.oneOf(['success', 'warning', 'error']),
// };

export default Alert;
