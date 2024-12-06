import FriendCard from "./FriendCard.jsx";

const FriendList = ({friends}) => {
	return (
		<ul className="friendList">
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