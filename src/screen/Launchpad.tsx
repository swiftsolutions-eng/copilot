import { useState, useEffect } from 'react'
import { Container, Text, Button } from '@chakra-ui/react'

const Launchpad = () => {
  const [filePath, setFilePath] = useState('')

  useEffect(() => {
    window.Main.on('browse-file-reply', setFilePath)
  }, [])

  return (
    <Container maxW="container.xl">
      <Text>{filePath}</Text>
      <Button
        onClick={() => {
          window.Main.sendMessage('browse-file')
        }}
      >
        Browse File
      </Button>
    </Container>
  )
}

export default Launchpad
