import React from "react";
import { calculateInvestmentResults } from "./../util/investment";
import { formatter } from "./../util/investment";

function InvestmentResults({ inputValue }) {
  const resultsData = calculateInvestmentResults(inputValue); // [{...}{...}... 총10개의 객체가 들어있는 배열]

  const initialInvestment = inputValue.initialInvestment;

  console.log(resultsData);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {/* Array.from([1, 2, 3], (x) => x + x); // [2, 4, 6] _ 매개변수 안쓰겠다는 표현 */}
        {resultsData.map((data) => {
          const totalInterest = data.valueEndOfYear - initialInvestment;
          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(initialInvestment)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default InvestmentResults;
