import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import s from './FriendList.module.css';

export default function FrienList({ friends }) {
    return (
        <ul className={s.list}>
            {friends.map(friend => (
                    <li className={s.item} key={friend.id}>
                        <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline} />
                    </li>
                ))}
        </ul>
    )
}

FrienList.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}