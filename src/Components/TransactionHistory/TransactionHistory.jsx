import TransactionLine from "./TransactionLine.jsx";
import css from "./TransactionHistory.module.css";

const TransactionHistory = ({transactions}) => {
	return (<>
			{transactions && transactions.length > 0 && <table className={css.table}>
				<thead>
				<tr>
					<th>Type</th>
					<th>Amount</th>
					<th>Currency</th>
				</tr>
				</thead>
				
				<tbody>
				{transactions.map(transaction => (<TransactionLine {...transaction} key={transaction.id}/>))}
				</tbody>
			</table>}
		</>
	
	)
}

export default TransactionHistory;