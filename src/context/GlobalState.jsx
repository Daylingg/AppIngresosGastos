import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import AppReducer from './AppReducer'

const initialState = {
  transactions: [],
}

export const Context = createContext()
export const useGlobalState = () => {
  const context = useContext(Context)
  return context
}

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState, () => {
    const localData = localStorage.getItem('transactions')
    return localData ? JSON.parse(localData) : initialState //si hay algo en localdata q convierta lo q hay con json.parse sino q se inicialice con el valor inicial
  })

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(state))
  }, [state]) //cuando cambie el estado q se guarde en el localstorage

  const addTransaction = (transaction) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    })
  }

  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    })
  }

  const deleteAllTransactions = () => {
    dispatch({
      type: 'DELETE_ALL',
    })
  }

  return (
    <Context.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
        deleteAllTransactions,
      }}
    >
      {children}
    </Context.Provider>
  )
}
