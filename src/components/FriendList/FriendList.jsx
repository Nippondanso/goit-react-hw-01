import FriendCard from "./FriendCard.jsx";
import css from './FriendList.module.css'

const FriendList = ({friends}) => {
	return (
		<ul className={css.friendList}>
			{friends.map((friend) => {
				return (
					<FriendCard
						key={friend.id}
						{...friend}/>
				)
			})}
		</ul>
	)
}

export default FriendList;