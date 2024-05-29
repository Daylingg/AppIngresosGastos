import React from 'react'
import { useGlobalState } from '../../context/GlobalState'
import { TransactionItems } from './TransactionItems'

export const TransactionsList = () => {
  const { transactions, deleteAllTransactions } = useGlobalState()

  return (
    <>
      <h3 className="text-slate-300 text-xl font-bold w-full">History</h3>
      <ul>
        {transactions.map((transaction) => (
          <TransactionItems key={transaction.id} transaction={transaction} />
        ))}
      </ul>
      <button onClick={(e) => deleteAllTransactions()}>Clear</button>
    </>
  )
}
