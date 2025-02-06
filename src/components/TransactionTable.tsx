import './TTable.css'

export interface Transaction {
  transactionId: string;
  amount: number;
  type: "debit" | "credit";
  comment: string;
  date: string;
}



const TransactionTable = ({transactions}:{transactions:Transaction[]}) => {
  return (
    <div className="transaction-table">
      <table>
        <thead>
          <tr>
            <th>Transaction</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions?.map((transaction) => (
            <tr
              key={transaction.transactionId}
              style={{
                backgroundColor:
                  transaction.type === "debit" ? "#00FF100D" : "#FF00000D", // Light green for "debit", light red for "credit"
              }}
            >
              <td>{transaction.comment}</td>
              <td>
                {transaction.type === "credit"
                  ? `-${transaction.amount}`
                  : transaction.amount}
              </td>
              <td>{transaction.type}</td>
              <td>{transaction.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
