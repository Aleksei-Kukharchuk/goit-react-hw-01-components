import defaultAvatar from 'components/defaultAvatar.jpg'
import s from './FriendList.module.css';

export default function FriendListItem({ avatar=defaultAvatar, name, isOnline }) {
    return (
        <>
            {isOnline === true
                ? (<span className={s.status} style={{ backgroundColor: "green" }}></span>) 
                : (<span className={s.status}></span>)}
            <img className={s.avatar} src={avatar} alt={name} width="48"/>
            <p>{name}</p>
        </>
    )
}