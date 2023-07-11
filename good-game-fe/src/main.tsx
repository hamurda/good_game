import React from 'react'
import {ChakraProvider} from '@chakra-ui/react'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <ChakraProvider>
              <App />
              <ReactQueryDevtools/>
          </ChakraProvider>
      </QueryClientProvider>
  </React.StrictMode>,
)
