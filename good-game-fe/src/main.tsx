import React from 'react'
import { RouterProvider } from 'react-router-dom';
import {ChakraProvider} from '@chakra-ui/react'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import ReactDOM from 'react-dom/client'
import router from "./routing/routes";
import './index.css'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <ChakraProvider>
              <RouterProvider router={router}/>
              <ReactQueryDevtools/>
          </ChakraProvider>
      </QueryClientProvider>
  </React.StrictMode>,
)
