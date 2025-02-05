<div>
  <label className="text-gray-700 font-medium flex justify-between items-center">
    Calculate with Inflation
    <select
      value={calculateWithInflation ? "Yes" : "No"} // Set the value based on the state
      onChange={(e) => setCalculateWithInflation(e.target.value === "Yes")}
      className="px-3 py-2 border rounded-md"
    >
      <option value="No">No</option>
      <option value="Yes">Yes</option>
    </select>
  </label>
</div>;

{
  calculateWithInflation && (
    <div>
      <label className="text-gray-700 font-medium flex justify-between items-center">
        Inflation Rate (%)
        <input
          type="number"
          value={inflationRate}
          onChange={(e) => setInflationRate(Number(e.target.value))}
          className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter inflation rate"
        />
      </label>
    </div>
  );
}
