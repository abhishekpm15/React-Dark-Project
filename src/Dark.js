import React, {useState} from 'react';
import './Dark.css';

function Dark() {
    const [initialState , finalState] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const [btnInital, btnFinal] = useState("Dark Mode")
    const [btnName, setBtnName] = useState("btn btn-dark my-5")
    const handleDark=() => {
        if(initialState.color === 'black'){
            finalState({
                color:'white',
                backgroundColor:'black'
            })
            btnFinal("Light Mode")
            setBtnName("btn btn-light my-5")
        }else{
            finalState({
                color:'black',
                backgroundColor:'white'
            })
            btnFinal("Dark Mode")
            setBtnName("btn btn-dark my-5")
        }
    }
  return <div >
  <div className='Contents' style={initialState}>
        <h1 className='heading'>Hello World</h1>
     <br/>
        <h2 className='random'>This is a random text</h2>
     <br/>
     <div>
        <p className='para'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>
     </div>
    </div>
    <div className="buttons">
    <button onClick={handleDark} type="button" className={btnName}>{btnInital}</button>
    </div>
  </div>;
}

export default Dark;
