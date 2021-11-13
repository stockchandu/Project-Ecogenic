import './App.css';
import { useState,useEffect } from 'react';
import { Onboarding1 } from './components/Onboarding1';
import { Onboarding2 } from './components/Onboarding2';
import { Onboarding3 } from './components/Onboarding3';

function App() {
  const [count, setCount] = useState(1)

  useEffect(()=>{
    const id = setInterval(() => {
        setCount((prev)=>{
            if(prev === 3){
                clearInterval(id)
                return 3;
            }
            return Number(prev) + 1;
        })
    }, 2000);

    return ()=>{
        clearInterval(id)
    }

},[])

  return (
    count===1 ?
    <div>
      <Onboarding1/>
    </div>
    :
    count ===2 ?
    <div>
      <Onboarding2/>
    </div>
    :
    <div>
      <Onboarding3/>
    </div>
  );
}

export default App;