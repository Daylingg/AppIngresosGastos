import React from 'react'
import { Balance } from './components/Balance'
import { ExpenseChart } from './components/ExpenseChart'
import { Header } from './components/Header'
import { IncomeExpenses } from './components/IncomeExpenses'
import { TransactionForm } from './components/transactios/TransactionForm'
import { TransactionsList } from './components/transactios/TransactionsList'
import { GlobalProvider, useGlobalState } from './context/GlobalState'

const App = () => {
  return (
    <GlobalProvider>
      <div className="bg-zinc-950 text-white h-screen flex justify-center items-center">
        <div className="container mx-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
          <div className="bg-zinc-700  p-4 sm:p-6 md:p-8 rounded-lg flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/2">
              <h1>Expense Tracker</h1>
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            <div className=" flex flex-col flex-1 overflow-auto">
              <ExpenseChart />
              <div className="max-h-64 overflow-auto">
                <TransactionsList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  )
}

export default App

/** <GlobalProvider>
      <div className="bg-zinc-950 text-white h-screen flex justify-center items-center">
        <div className="container mx-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
          <div className="bg-zinc-700 p-4 sm:p-6 md:p-8 rounded-lg flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/2">
              <h1>Expense Tracker</h1>
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            <div className="w-full sm:w-1/2 overflow-auto">
              <ExpenseChart />
              <div className="max-h-64 overflow-auto">
                <TransactionsList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider> */
