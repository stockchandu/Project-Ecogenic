import { useState, useEffect } from 'react';
import { Onboarding1 } from './Onboarding1';
import { Onboarding2 } from './Onboarding2';
import { Onboarding3 } from './Onboarding3';
import { useHistory } from 'react-router-dom'

const OnboardingParent = () => {
  const history = useHistory()
  const [count, setCount] = useState(1);
  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => {
        if (prev === 5) {
          clearInterval(id)
          return 5;
        }
        return Number(prev) + 1;
      })
    }, 1000);

    return () => {
      clearInterval(id)
    }

  }, [])

  const next = () => {
    history.push("/SplashMain");
  }

  return (
    <div>{count <= 2 ?

      <Onboarding1 /> :

      count > 2 && count <= 4 ?

        <Onboarding2 /> :

        count === 5 ?

          <Onboarding3 next={next} /> :

          <p>Next</p>

    }</div>

  );
}

export default OnboardingParent