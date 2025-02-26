
import { useState } from 'react'
import './App.css'
import { TextField } from '@mui/material';

function App() {
   /* emailContent =a state variable that stores the content of the email
   setEmailContent =a function to update the emailContent
   useState('') = Initilizes emailContent with an empty string('') */
  const [emailContent , setEmailContent]  = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading ] = useState(false);
  const [error, setError] = useState('');
  
  
  

  return ( 
    <Container maxWidth="md" sx={{py:4}}>
      <Typography variant='h3' component="h1" gutterBottom>
        Email Reply Generator
      </Typography>

      <Box sx={{mx:3}}>
        <TextField
        fullWidthmultiline
        rows={6}
        variant='outlined'
        label="Original Email Content"
        value={emailContent || ' '}
        onChange={}
        />


      </Box>
    </Container>
                                                                    
   

  )
}

export default App
