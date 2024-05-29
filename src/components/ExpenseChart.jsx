import React from 'react'
import { VictoryPie, VictoryLabel } from 'victory'
import { useGlobalState } from '../context/GlobalState'

export const ExpenseChart = () => {
  const { transactions } = useGlobalState()

  const total = transactions.reduce(
    (acc, transaction) => (acc += transaction.amount),
    0
  )

  //el total de ingresos lo buscamos si la transaccion es mayor q cero es positivo se le dice al acumulador q empieza en cero q agregue de la transaccion el monto
  const totalIncome = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0)

  const totalExpense =
    transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1

  // Manejar el caso en que no hay transacciones
  let totalExpensesPercentage = 0
  let totalIncomePercentage = 0

  if (totalIncome > 0) {
    //porcentaje de gastos
    totalExpensesPercentage = Math.round((totalExpense / totalIncome) * 100)
    //porcentajes de ingresos
    totalIncomePercentage = 100 - totalExpensesPercentage
  }

  return (
    <VictoryPie
      colorScale={['#e74c3c', '#2ecc71']}
      data={[
        { x: 'Expenses', y: totalExpensesPercentage },
        { x: 'Incomes', y: totalIncomePercentage },
      ]}
      animate={{ duration: 200 }}
      labels={({ datum }) => `${datum.y}%`}
      labelComponent={<VictoryLabel angle={45} style={{ fill: 'white' }} />}
    />
  )
}
