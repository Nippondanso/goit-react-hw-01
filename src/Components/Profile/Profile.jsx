import React from "react";

export const Profile = ({name,tag,location,image,stats}) => {
	return (
		<div className="profile">
			<div>
				<img
					src={image}
					alt={name}
				/>
				<p>{name}</p>
				<p>@{tag}</p>
				<p>{location}</p>
			</div>
			
			<ul>
				<li>
					<span>Followers</span>
					<span>1000</span>
				</li>
				<li>
					<span>Views</span>
					<span>2000</span>
				</li>
				<li>
					<span>Likes</span>
					<span>3000</span>
				</li>
			</ul>
		
		</div>
	)
}