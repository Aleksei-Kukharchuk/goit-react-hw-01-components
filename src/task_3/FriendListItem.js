import defaultAvatar from '../components/defaultAvatar.jpg'

export default function FriendListItem({ avatar=defaultAvatar, name, isOnline }) {
    return (
        <>
            {isOnline === true
                ? (<span className="status" style={{ backgroundColor: "green" }}></span>) 
                : (<span className="status"></span>)}
            <img className="avatar" src={avatar} alt={name} width="48"/>
            <p className="name">{name}</p>
        </>
    )
}