import React from 'react'
import { useGlobalState } from '../context/GlobalState'

export const IncomeExpenses = () => {
  const { transactions } = useGlobalState()

  const amounts = transactions.map((transaction) => transaction.amount)

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2) //.tofixed(2) es para q redondee a 2 lugares el valor despues del punto

  //filter((item) => item > 0)) saca los q solo son positivos....filter((item) => item < 0))saca los q son negativos

  const expense =
    amounts
      .filter((item) => item < 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2) * -1 //al mmultiplicar por -1 desaparece el signo negativo

  return (
    <>
      <div className="flex justify-between my-2">
        <h4> Income</h4>
        <p>{income}</p>
      </div>
      <div className="flex justify-between my-2">
        <h4>Expense</h4>
        <p>{expense}</p>
      </div>
    </>
  )
}
