import css from './FriendCard.module.css';

const setStatus = (isOnline) => {
	return isOnline ? css.online : css.offline
}

const FriendCard = ({avatar, name, isOnline, id}) => {
	return (
		<div key={id} className={css.friendCard}>
			<img src={avatar} alt={name} width="48"/>
			<p>{name}</p>
			<p className={setStatus(isOnline)}>{isOnline ? 'Online' : 'Offline'}</p>
		</div>
	)
}

export default FriendCard;