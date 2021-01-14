export default function TransactionHistory({ items }) {
    return (
        <table className="transaction-history">
            <thead>
                <tr className="transaction-head-row">
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>
            <tbody>
            {items.map(item => (
                <tr className="transaction-body-row" key={item.id}>
                <td className="transaction-body-data">{item.type}</td>
                <td className="transaction-body-data">{item.amount}</td>
                <td className="transaction-body-data">{item.currency}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}