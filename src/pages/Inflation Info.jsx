import React from "react";

const InflationInfo = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Understanding Inflation</h1>
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">1. Causes of Inflation</h2>
        <p className="mb-4">
          Inflation can be caused by several factors, typically categorized into demand-pull inflation, cost-push inflation, and built-in inflation:
        </p>

        <ul className="list-disc pl-6">
          <li>
            <strong className="font-semibold">Demand-Pull Inflation:</strong> This occurs when the demand for goods and services exceeds the economy’s productive capacity.
            It typically happens during periods of economic growth, when there’s an increase in consumer spending, government expenditure, or business investments.
          </li>
          <li>
            <strong className="font-semibold">Cost-Push Inflation:</strong> This arises when the cost of production increases, leading to higher prices for goods and services. This could be due to increased raw materials, wages, or energy costs.
          </li>
          <li>
            <strong className="font-semibold">Built-In Inflation (Wage-Price Spiral):</strong> This happens when workers demand higher wages to keep up with rising living costs, and businesses increase prices to cover the higher wage costs.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">2. Types of Inflation</h2>
        <p className="mb-4">
          Inflation can be categorized into different types based on its rate and impact:
        </p>

        <ul className="list-disc pl-6">
          <li>
            <strong className="font-semibold">Creeping Inflation:</strong> This type of inflation occurs at a rate of 1-3% annually and is considered mild, usually not disruptive.
          </li>
          <li>
            <strong className="font-semibold">Walking Inflation:</strong> When inflation is between 3% and 10% annually, it starts to erode purchasing power more noticeably.
          </li>
          <li>
            <strong className="font-semibold">Galloping Inflation:</strong> Galloping inflation refers to inflation rates exceeding 10%, which can have significant impacts on the economy.
          </li>
          <li>
            <strong className="font-semibold">Hyperinflation:</strong> This extreme form of inflation occurs when prices increase uncontrollably, often due to economic collapse or excessive money printing by the government.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">3. Measuring Inflation</h2>
        <p className="mb-4">
          Inflation is measured using price indices. The two primary indices are:
        </p>
        <ul className="list-disc pl-6">
          <li>
            <strong className="font-semibold">Consumer Price Index (CPI):</strong> The CPI tracks the average change in prices paid by consumers for goods and services over time.
          </li>
          <li>
            <strong className="font-semibold">Producer Price Index (PPI):</strong> The PPI tracks the average change in prices received by domestic producers for their output.
          </li>
          <li>
            <strong className="font-semibold">Core Inflation:</strong> This excludes volatile items like food and energy, giving a clearer picture of long-term inflation trends.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">4. Consequences of Inflation</h2>
        <p className="mb-4">
          Inflation has several consequences on an economy:
        </p>
        <ul className="list-disc pl-6">
          <li>
            <strong className="font-semibold">Erosion of Purchasing Power:</strong> As inflation rises, the value of money decreases, meaning people can buy less with the same amount of money.
          </li>
          <li>
            <strong className="font-semibold">Impact on Savings:</strong> If inflation outpaces interest rates, the real value of savings decreases over time.
          </li>
          <li>
            <strong className="font-semibold">Interest Rates and Borrowing:</strong> Higher inflation often leads central banks to raise interest rates, making borrowing more expensive.
          </li>
          <li>
            <strong className="font-semibold">Wage-Price Spiral:</strong> A cycle in which higher wages lead to higher prices, which then lead to more demands for higher wages.
          </li>
          <li>
            <strong className="font-semibold">Distorted Price Signals:</strong> Inflation can make it difficult for businesses and consumers to make accurate decisions, as prices are constantly rising.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">5. Inflation Control Measures</h2>
        <p className="mb-4">
          Policymakers use several tools to control inflation:
        </p>
        <ul className="list-disc pl-6">
          <li>
            <strong className="font-semibold">Monetary Policy:</strong> Central banks use interest rate adjustments and other tools to influence inflation.
          </li>
          <li>
            <strong className="font-semibold">Fiscal Policy:</strong> Governments can influence inflation through public spending and taxation policies.
          </li>
          <li>
            <strong className="font-semibold">Supply-Side Policies:</strong> These policies aim to increase the supply of goods and services to reduce inflationary pressures.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">6. Conclusion</h2>
        <p>
          Inflation is an inevitable and crucial part of any economy. While moderate inflation can promote growth and investment, uncontrolled inflation can lead to significant economic challenges.
          Understanding its causes, effects, and ways to measure and control it is essential for anyone looking to understand economic health.
        </p>
      </section>
    </div>
  );
};

export default InflationInfo;
