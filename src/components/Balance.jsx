import React from 'react'
import { useGlobalState } from '../context/GlobalState'

export const Balance = () => {
  const { transactions } = useGlobalState()
  const amount = transactions.map((transaction) => transaction.amount)

  //el reduce es un metodo q permite juntar un valor anterior y un valor siguiente
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2)

  return (
    <div className="flex justify-between">
      <h3>Your Balance</h3>
      <h1 className="text-2xl font-bold">${total}</h1>
    </div>
  )
}
