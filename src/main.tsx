import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'

import Lauchpad from './screen/Launchpad'

ReactDOM.render(
  <ChakraProvider>
    <Lauchpad />
  </ChakraProvider>,
  document.getElementById('root')
)
