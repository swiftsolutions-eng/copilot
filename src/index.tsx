import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Explorer from './Explorer'
import Lauchpad from './screen/Launchpad'

ReactDOM.render(
  <BrowserRouter>
    <ChakraProvider>
      <Routes>
        <Route path="/main_window" element={<Lauchpad />} />
        <Route path="/explorer" element={<Explorer />} />
      </Routes>
    </ChakraProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
