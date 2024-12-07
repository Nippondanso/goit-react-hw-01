import './App.css'
import {Profile} from "./Profile/Profile.jsx";
import FriendList from "./FriendList/FriendList.jsx";
import TransactionHistory from "./TransactionHistory/TransactionHistory.jsx";

import friendData from "../../friendsData.json";
import userData from '../../userData.json';
import transactionData from '../../transactionData.json';

function App() {
	
	return (
		<>
			<Profile {...userData} />
			<FriendList friends={friendData}/>
			<TransactionHistory transactions={transactionData} />
		</>
	)
}

export default App
