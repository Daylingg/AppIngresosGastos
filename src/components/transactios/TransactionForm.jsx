import React, { useRef, useState } from 'react'
import { useGlobalState } from '../../context/GlobalState'
import { z } from 'zod'

const transactionSchema = z.object({
  description: z.string().nonempty({ message: 'Description is required' }),
  amount: z.number({ invalid_type_error: 'Amount must be a number' }),
})

export const TransactionForm = () => {
  const [description, setDescription] = useState('') //guarda lo q se hace si es compra, venta o cobro
  const [amount, setAmount] = useState(0) //guarda los montos de entradas y salidas
  const [error, setError] = useState({ description: '', amount: '' }) // Almacena los errores de validación
  const { addTransaction } = useGlobalState()
  const refDescription = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    // Convertir amount a número antes de la validación
    const amountValue = parseFloat(amount)

    // Validar los datos
    const validationResult = transactionSchema.safeParse({ description, amount: amountValue })

    if (!validationResult.success) {
      // Manejar los errores de validación
      const validationErrors = validationResult.error.format()
      setError({
        description: validationErrors.description?._errors[0] || '',
        amount: validationErrors.amount?._errors[0] || '',
      })
      return
    }

    // Si los datos son válidos, agregar la transacción
    addTransaction({
      id: crypto.randomUUID(),
      description,
      amount: +amount, //esto es para q el valor q se le pase aunque sea string lo ocnvierta en numero
    })
    setDescription('')
    setAmount(0.0)
    setError({ description: '', amount: '' })

    // Enfocar el campo de entrada de descripción
    refDescription.current.focus()
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
          ref={refDescription}
        />
        {error.description && <p className="text-red-500">{error.description}</p>}
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
        {error.amount && <p className="text-red-500">{error.amount}</p>}
        <button className="bg-indigo-700 text-white px-3 py-2 rounded-lg mb-2 w-full block">Add Transaction</button>
      </form>
    </div>
  )
}
