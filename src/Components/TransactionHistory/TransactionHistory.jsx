import TransactionLine from "./TransactionLine.jsx";

const TransactionHistory = ({transactions}) => {
	return (<>
			{transactions && transactions.length > 0 && <table>
				<thead>
				<tr>
					<th>Type</th>
					<th>Amount</th>
					<th>Currency</th>
				</tr>
				</thead>
				
				<tbody>
				{transactions.map(transaction => (<TransactionLine {...transaction} key={transaction.id}/>))}
				{/*<tr>*/}
				{/*	<td>Invoice</td>*/}
				{/*	<td>125</td>*/}
				{/*	<td>USD</td>*/}
				{/*</tr>*/}
				{/*<tr>*/}
				{/*	<td>Withdrawal</td>*/}
				{/*	<td>85</td>*/}
				{/*	<td>USD</td>*/}
				{/*</tr>*/}
				</tbody>
			</table>}
		</>
	
	)
}

export default TransactionHistory;