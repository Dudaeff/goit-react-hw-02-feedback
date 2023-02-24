import { List } from 'components/List/List.styled';
import PropTypes from 'prop-types';
import { Good, Neutral, Bad } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onClick }) => {
  return (
    <List>
      <li>
        <Good type="button" name="good" onClick={onClick}>
          Good
        </Good>
      </li>
      <li>
        <Neutral type="button" name="neutral" onClick={onClick}>
          Neutral
        </Neutral>
      </li>
      <li>
        <Bad type="button" name="bad" onClick={onClick}>
          Bad
        </Bad>
      </li>
    </List>
  );
};

FeedbackOptions.propTypes = {
  onClick: PropTypes.func,
};
