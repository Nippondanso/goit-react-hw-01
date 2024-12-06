const FriendCard = ({avatar, name, isOnline, id}) => {
	return (
		<div key={id} className="friendCard">
			<img src={avatar} alt={name} width="48"/>
			<p>{name}</p>
			<p>{isOnline ? 'Online' : 'Offline'}</p>
		</div>
	
	)
}

export default FriendCard;