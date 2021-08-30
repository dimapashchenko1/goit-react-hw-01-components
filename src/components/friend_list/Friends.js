import PropTypes from 'prop-types';
import css from './Friends.module.css';

export default function FriendList({ friends = [] }) {
  return (
    <ul className={css.friends}>
      {friends.map(friend => {
        return (
          <li className={css.item} key={friend.id}>
            <span
              className={`${css.status} ${
                friend.isOnline ? css.isOnline : css.isOfline
              }`}
            ></span>
            <img
              className={css.avatar}
              src={friend.avatar}
              alt={friend.name}
              width="48"
            />
            <p className={css.name}>{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
