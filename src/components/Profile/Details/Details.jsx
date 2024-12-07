import css from './Details.module.css'

const Details = (stats) => {
	const keys = Object.keys(stats.stats);
	
	return (
		<ul className={css.list}>
			{keys.map((item, i) => {
				return (
					<li
						key={i}>
						<small>{item}</small>
						<span>{stats.stats[item]}</span>
					</li>
				);
			})}
		</ul>
	)
}

export default Details;
