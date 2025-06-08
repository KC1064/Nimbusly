import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "./theme/theme-provider"
import Layout from "./components/layout"
import Dashboard from "./pages/Dashboard"
import CityDetailPage from "./pages/CityDetailPage"
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
export default function App() {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000, // 5 minutes
        gcTime: 10 * 60 * 1000, // 10 minutes
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>

      <BrowserRouter>
        <ThemeProvider defaultTheme="dark">
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/city/:cityname" element={<CityDetailPage />}></Route>
            </Routes>
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
