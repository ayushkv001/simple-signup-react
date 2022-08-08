
import { useState  } from 'react';
import './App.css';

function App() {
  const [allUsers,setAllUsers] = useState([]);
  const [see,setSee] = useState(true)

  const submitForm =(e)=>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputObject = Object.fromEntries(formData) 
    setAllUsers([...allUsers,inputObject])
    e.target.reset()
  }

  const handleSight = () =>{
    if(see === true){
    
    document.getElementById('all').style.display = 'block'
    setSee(false)}
    else{
      document.getElementById('all').style.display = 'none'
      setSee(true)
    }
  }

  return (
    <div className='out'>
    <div className="App">
      <h1>Registration Form</h1>
      <form onSubmit={submitForm}>
        <div className='inDiv'>
        <input name='name' placeholder='Name' autoComplete='off' />
        <input name='companyname' placeholder='Company-Name' autoComplete='off' />
        <input name='email' placeholder='Email' autoComplete='off' />
        <input name='phone' placeholder='Phone' autoComplete='off' />
        <input type='password' name='password' placeholder='Password' autoComplete='off' />
        </div>
        <button type='submit'>Register</button>
      </form>

    </div>
    <button onClick={handleSight}>See All Users On/Off</button>
    <div className='all' id='all'>{
      allUsers.map((obj)=>{
        return <>Name : {obj.name} | Company : {obj.companyname} | Email : {obj.email} | Phone : {obj.phone} <br/></>
      })
      }</div>
    </div>
  );
}

export default App;
