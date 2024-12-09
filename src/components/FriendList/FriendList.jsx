import FriendListItem from "../FriendListItem/FriendListItem.jsx";
import css from './FriendList.module.css'

const FriendList = ({friends}) => {
	return (
		<ul className={css.friendList}>
			{friends.map((friend) => {
				return (
					<FriendListItem
						key={friend.id}
						{...friend}/>
				)
			})}
		</ul>
	)
}

export default FriendList;