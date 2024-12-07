import React from "react";
import css from './Profile.module.css'
import MainInfo from "./MainInfo/MainInfo.jsx";
import Details from "./Details/Details.jsx";

export const Profile = ({username: name, tag, location, avatar: image, stats}) => {
	return (
		<div className={css.profile}>
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