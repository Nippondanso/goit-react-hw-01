import css from './MainInfo.module.css'

const MainInfo = ({image, name, location, tag}) => {
	return (
		<div className={css.mainInfo}>
			<img
				className={css.img}
				src={image}
				alt={name}
			/>
			<p className={css.name}>{name}</p>
			<p className={css.tag}>@{tag}</p>
			<p className={css.location}>{location}</p>
		</div>
	)
}

export default MainInfo;