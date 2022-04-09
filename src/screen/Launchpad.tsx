import { useState, useEffect, useCallback, useMemo } from 'react'
import { Container, Button, Box, Heading, Stack } from '@chakra-ui/react'
import { useDropzone } from 'react-dropzone'

const Launchpad = () => {
  const [filePath, setFilePath] = useState('')
  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0]
    setFilePath(file.path)
  }, [])
  const { getRootProps, getInputProps } = useDropzone({ onDrop })
  const [isLoading, setLoading] = useState(false)
  const [result, setResult] = useState<any[]>([])
  const formattedPath = useMemo(() => {
    if (!filePath) return ''

    return filePath.match(/\/([^/]+)\/?$/)?.[1]
  }, [filePath])

  const handleSave = () => {
    setLoading(true)
    window.Main.sendMessage('add-role-to-query', {
      sourceFile: filePath,
      role: 'juki.juki.juki',
    })
  }

  useEffect(() => {
    window.Main.on('add-role-to-query-resolved', (res: any) => {
      setResult(res)
      setLoading(false)
    })
    window.Main.on('add-role-to-query-rejected', () => {
      setLoading(false)
    })
    window.Main.on('browse-file-reply', setFilePath)
  }, [])

  return (
    <Box
      {...getRootProps()}
      onClick={e => {
        e.preventDefault()
      }}
      bg="gray.700"
    >
      <Box pointerEvents="none">
        <input {...getInputProps()} />
      </Box>
      <Container h="100vh" maxW="container.xl">
        <Stack h="100vh" py="4">
          <Box flex={1} p="6" borderRadius="lg">
            <Heading textAlign="center" color="whiteAlpha.700">
              Drag & Drop gql file
            </Heading>
            <Heading mt={4} textAlign="center" color="white" size="md">
              {formattedPath}
            </Heading>
          </Box>
          <Stack bg="gray.500" p="4" borderRadius="lg">
            <Button
              onClick={handleSave}
              isLoading={isLoading}
              isDisabled={!filePath}
            >
              Save
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default Launchpad
