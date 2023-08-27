import React from 'react'
import ReactDOM from 'react-dom/client'

import { createServer } from 'miragejs'

import { App } from './App'

createServer({
  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Desenvolvimento de site',
          amount: 200000,
          type: 'deposit',
          category: 'venda',
          createdAt: new Date(),
        },
      ]
    })
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
