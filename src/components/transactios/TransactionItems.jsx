import React from 'react'
import { useGlobalState } from '../../context/GlobalState'

export const TransactionItems = ({ transaction }) => {
  const { deleteTransaction } = useGlobalState()
  return (
    <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
      <p className="text-sm">{transaction.description}</p>
      <div>
        <span className="px-1">${transaction.amount}</span>
        <button
          onClick={() => {
            deleteTransaction(transaction.id)
          }}
        >
          X
        </button>
      </div>
    </li>
  )
}
