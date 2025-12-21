import SidebarProvider from './store/sidebar/SidebarProvider'
import { RouterProvider } from 'react-router-dom'
import { router } from './components/layout/router'

const App = () => {

  return (
    <SidebarProvider>
      {/* <PageLayout /> */}
      <RouterProvider router={router} />
    </SidebarProvider>
  )
}

export default App

//