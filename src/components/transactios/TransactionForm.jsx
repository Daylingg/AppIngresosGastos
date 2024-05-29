import React, { useState } from 'react'
import { useGlobalState } from '../../context/GlobalState'

export const TransactionForm = () => {
  const [description, setDescription] = useState('') //guarda lo q se hace si es compra, venta o cobro
  const [amount, setAmount] = useState(0) //guarda los montos de entradas y salidas
  const { addTransaction } = useGlobalState()

  const handleSubmit = (e) => {
    e.preventDefault()

    addTransaction({
      id: crypto.randomUUID(),
      description,
      amount: +amount, //esto es para q el valor q se le pase aunque sea sring lo ocnvierta en numero
    })
    setDescription('')
    setAmount(0.0)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
          type="text"
          placeholder="Enter a description"
          onChange={(e) => {
            setDescription(e.target.value)
          }}
          value={description}
        />
        <input
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
          type="number"
          placeholder="00.00"
          step="0.01"
          onChange={(e) => {
            setAmount(e.target.value)
          }}
          value={amount}
        />
        <button className="bg-indigo-700 text-white px-3 py-2 rounded-lg mb-2 w-full block">
          Add Transaction
        </button>
      </form>
    </div>
  )
}
