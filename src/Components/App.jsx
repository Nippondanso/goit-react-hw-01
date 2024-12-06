import './App.css'
import {Profile} from "./Profile/Profile.jsx";
import FriendList from "./FriendList/FriendList.jsx";

import friendData from "../../friendsData.json";
import userData from '../../userData.json';



function App() {
	
	return (
		<>
			<Profile {...userData} />
			<FriendList friends ={friendData}/>
		
		</>
	)
}

export default App
