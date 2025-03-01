import {useState} from 'react'
import './App.css'
import { Container, Typography, Box, TextField ,
  FormControl, InputLabel, Select, MenuItem 
 } from '@mui/material';


function App() {
  const [emailContent , setEmailContent] = useState('');
  const [tone , setTone] = useState('');
  const [ generatedReply , setGeneratedReply] = useState('');
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(''); 

  return (
      


    <Container maxWidth="md" sx={{py:4}}>
      <Typography variant='h3' component="h1" gutterBottom>
        Email Reply Generator
      </Typography>
      <Box sx={{mx:3}}>
        <TextField
        fullWidth
        multiline
        rows={6}
        label="Original Email Content"
        value={emailContent || ''}
        onChange={(e) => setEmailContent(e.target.value)}
        sx={{mb:2}}
        />
        
        <FormControl fullWidth sx={{mb : 2}}>
          <InputLabel>Tone(Optional)</InputLabel>
          <Select 
          value={tone || ''}
          label={"Tone(Optional)"}
          onChange={(e) => setTone(e.target.value)}>
            <MenuItem value="">None</MenuItem>
            <MenuItem value="professional">professional</MenuItem>
            <MenuItem value="casual">Casual</MenuItem>
            <MenuItem value="friendly">Friendly</MenuItem>
          </Select>
        </FormControl>
        
      </Box>
    </Container>


  )
}

export default App
