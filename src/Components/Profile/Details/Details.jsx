const Details = (stats) => {
	const keys = Object.keys(stats.stats);
	
	return (
		<ul>
			{keys.map((item, i) => {
				return (
					<li key={i}>
						<span>{item}</span>
						<span>{stats.stats[item]}</span>
					</li>
				);
			})}
		</ul>
	)
}

export default Details;
