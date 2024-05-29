//aunque no se nombre la funcion al exportarla se nombra como appreducer q es el nombre por defecto
export default (state, action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return { ...state, transactions: [...state.transactions, action.payload] }

    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      }

    case 'DELETE_ALL':
      return { ...state, transactions: [] }
    default:
      return state
  }
}
