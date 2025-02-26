
import { useState } from 'react'
import './App.css'

function App() {

  const[emailContent , setEmailContent]  = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const[loading, setLoading ] = useState(false);
  const[error, setError] = useState('');
  




  return (
    <>
     <p>hello</p>
    </>
  )
}

export default App
