import React,{useState} from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";





function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){

      setMode('dark')
      document.body.style.backgroundColor='#042473'
      showAlert("Dark mode has been enabled","success")
      
      
    }else{
      
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success")
     
    }
  }

  const toggleMode1=()=>{
    if(mode==='light'){

      setMode('dark')
      document.body.style.backgroundColor='#7e0e61'
      showAlert("Dark mode has been enabled","success")
    }else{
      
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success")
    }
  }

  const toggleMode2=()=>{
    if(mode==='light'){

      setMode('dark')
      document.body.style.backgroundColor='orange'
      showAlert("Dark mode has been enabled","success")
    }else{
      
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success")
    }
  }

  const toggleMode3=()=>{
    if(mode==='light'){

      setMode('dark')
      document.body.style.backgroundColor='green'
      showAlert("Dark mode has been enabled","success")
    }else{
      
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success")
    }
  }




  return (
    <>
    <Router>

    <Navbar title="TextUtils" mode={mode} about="About us" toggleMode={toggleMode}  toggleMode1={toggleMode1}  toggleMode2={toggleMode2}  toggleMode3={toggleMode3}/>
    <Alert  alert={alert}/>
    <div className="container">
    <Routes>
      {/* <Route  path="/about" element={<About/>}>
      </Route> */}
      <Route  path="/" element={<TextForm showAlert={showAlert} Heading="Enter the text to analyze below" mode={mode}/>}>
    {/* <TextForm showAlert={showAlert} Heading="Enter the text to analyze below" mode={mode}/> */}
      
      </Route>
    </Routes>
    </div>
    </Router>

    </>
     );
}

export default App;
