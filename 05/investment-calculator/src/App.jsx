import React, { useState } from "react";
import Header from "./components/Header";
import InvestmentCalculator from "./components/InvestmentCalculator";
import InvestmentResults from "./components/InventmentResults";

function App() {
  const [inputValue, setInputValue] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const initialInputValue = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn:0,
    duration: 0,
  }

  const inputIsValid = Object.values(inputValue).every(value => value >= 0); // 모든 값이 0보다 크고 duration이 0보다 큰지 확인

  // Input 컴포넌트에서 발생한 이벤트를 처리하는 함수
  function handleChange(e) {
    console.log(e.target.id, e.target.value); // 해당 이벤트가 발생한 요소의 id와 value를 콘솔에 출력
    setInputValue(prev => {
      return {
        ...prev,
        [e.target.id]: +e.target.value, // +를 붙여 숫자로 변환
      }
    })
  }

  return (
    <div className="container">
      <Header />
      <main>
        <InvestmentCalculator inputValue={inputValue} onChange={handleChange} />
        {inputIsValid && <InvestmentResults inputValue={inputValue}/>}
      </main>
    </div>
  );
}

export default App;
