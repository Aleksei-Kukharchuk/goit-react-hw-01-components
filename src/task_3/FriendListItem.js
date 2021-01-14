export default function FriendListItem({ avatar, name, isOnline }) {
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