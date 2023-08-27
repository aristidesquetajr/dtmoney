import React from 'react'
import ReactDOM from 'react-dom/client'

import { Model, createServer } from 'miragejs'

import { App } from './App'

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          description: 'Freelancer de site',
          amount: 200000,
          type: 'deposit',
          category: 'Dev',
          createdAt: new Date('2023-07-23 15:43:00'),
        },
        {
          id: 2,
          description: 'Aluguel',
          amount: 40000,
          type: 'withdraw',
          category: 'Casa',
          createdAt: new Date('2023-08-24 09:14:40'),
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
