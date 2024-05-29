import React from "react";
import Input from "./Input";

function InvestmentCalculator({ inputValue, onChange }) {
  return (
    <div id="user-input">
      <h2>Investment Calculator</h2>

      {/* You can add more details here */}
      <section id='input-container'>
        <Input id="initialInvestment" label="Initial Investment" inputValue={inputValue.initialInvestment} onChange={onChange}/>
        <Input id="annualInvestment" label="Annual Investment" inputValue={inputValue.annualInvestment} onChange={onChange}/>
        <Input id="expectedReturn" label="Expected Return" inputValue={inputValue.expectedReturn} onChange={onChange}/>
        <Input id="duration" label="Duration" inputValue={inputValue.duration} onChange={onChange}/>
      </section>
    </div>
  );
}

export default InvestmentCalculator;
