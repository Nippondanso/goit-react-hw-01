const TransactionLine = ({id,type,amount,currency}) => {
	return (
		<tr key={id} className="">
			<td>{type}</td>
			<td>{amount}</td>
			<td>{currency}</td>
		</tr>
	)
}

export default TransactionLine;