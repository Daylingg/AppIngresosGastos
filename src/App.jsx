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
      <div className="bg-zinc-950 text-white min-h-screen flex justify-center items-center overflow-auto">
        <div className="container mx-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
          <div className="bg-zinc-700 p-4 sm:p-6 md:p-8 rounded-lg flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/2 flex flex-col">
              <h1 className="text-center">Expense Tracker</h1>
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            <div className=" flex flex-col flex-1 max-h-full overflow-auto">
              <div className="w-full max-w-xs mx-auto">
                <ExpenseChart />
              </div>
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
