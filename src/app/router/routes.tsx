import type { RouteObject } from 'react-router'
import { Navigate } from 'react-router'
import TransactionAddPage from '../pages/TransactionAddPage/TransactionAddPage'
import TransactionsPage from '../pages/TransactionsPage/TransactionsPage'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <TransactionsPage />
  },
  {
    path: '/add',
    element: <TransactionAddPage />
  },

  {
    path: '*',
    element: <Navigate to="/" replace />
  }
]
