import React from "react";
import MainInfo from "./MainInfo/MainInfo.jsx";
import Details from "./Details/Details.jsx";

export const Profile = ({name, tag, location, avatar: image, stats}) => {
	return (
		<div className="profile">
			<MainInfo
				name={name}
				image={image}
				location={location}
				tag={tag}
			/>
			
			<Details stats={stats} />
		</div>
	)
}