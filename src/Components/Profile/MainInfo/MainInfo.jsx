import React from "react";

const MainInfo = ({image, name, location, tag}) => {
	return (
		<div>
			<img
				src={image}
				alt={name}
			/>
			<p>{name}</p>
			<p>@{tag}</p>
			<p>{location}</p>
		</div>
	)
}

export default MainInfo;