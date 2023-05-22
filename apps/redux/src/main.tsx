import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'

import { store } from '@memoization-explanation/store'

import App from './app/app'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
