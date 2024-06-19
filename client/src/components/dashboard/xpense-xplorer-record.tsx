import { useState } from "react";
import { useUser } from "@clerk/clerk-react";
// import { useXpenseRecords } from "../../Hooks/useXpenseRecords";
import { useXpenseRecords } from "../../contexts/xpense-record-context";


export const XpenseXplorerRecord = () => {
  const [description, setDescription] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [transactionType, setTransactionType] = useState<string>("expense");
  const [category, setCategory] = useState<string>("");
  const [frequency, setFrequency] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const { addRecord } = useXpenseRecords();

  const { user } = useUser();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newRecord = {
      userId: user?.id ?? "",
      date: new Date(),
      description: description,
      amount: parseFloat(amount),
      transactionType: transactionType,
      category: category,
      frequency: frequency,
      paymentMethod: paymentMethod,
    };

    addRecord(newRecord);
    setDescription("");
    setAmount("");
    // setTransactionType("expense");
    setCategory("");
    setFrequency("");
    setPaymentMethod("");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Description: </label>
          <input
            type="text"
            required
            className="input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label>Amount: </label>
          <input
            type="number"
            required
            className="input"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Choose Income or Expense: </label>
          {/* <input type="checkbox" />Income
            <input type="checkbox" />Expense */}
          <input
            type="radio"
            id="expense"
            name="expense"
            className="radio-btn"
            value="expense"
            checked={transactionType === "expense"}
            onChange={(e) => setTransactionType(e.target.value)}
          />
          <label htmlFor="expense">Expense</label>
          &nbsp;&nbsp;
          <input
            type="radio"
            id="income"
            value="income"
            name="income"
            className="radio-btn"
            checked={transactionType === "income"}
            onChange={(e) => setTransactionType(e.target.value)}
          />
          <label htmlFor="expense">Income</label>
        </div>
        <div className="form-field">
          {transactionType === "expense" && (
            <div>
              <label>Expense Category: </label>
              <select
                required
                className="input"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <option value="">Select an option</option>
                <option value="Food">Food</option>
                <option value="Rent">Rent</option>
                <option value="Loan">Loan</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Groceries">Groceries</option>
                <option value="HealthCare">HealthCare</option>
                <option value="Clothing">Clothing</option>
                <option value="Electricity">Electricity</option>
                <option value="Insurance">Insurance</option>
                <option value="Educational Expenses">
                  Educational Expenses
                </option>
                <option value="Travel">Travel</option>
              </select>
            </div>
          )}
          {transactionType === "income" && (
            <div>
              <label>Income Category: </label>
              <select
                required
                className="input"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <option value="">Select an option</option>
                <option value="Salary">Salary</option>
                <option value="Bonus">Bonus</option>
                <option value="Dividends">Dividends</option>
                <option value="Interest">Interest</option>
                <option value="Insurance">Insurance</option>
                <option value="Housing">Housing</option>
                <option value="Other">Other</option>
              </select>
            </div>
          )}
        </div>
        <div className="form-field">
          <label>Frequency: </label>
          <select
            className="input"
            value={frequency}
            onChange={(e) => {
              setFrequency(e.target.value);
            }}
          >
            <option value="">Select an option</option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </div>
        <div className="form-field">
          <label>Payment Method: </label>
          <select
            required
            className="input"
            value={paymentMethod}
            onChange={(e) => {
              setPaymentMethod(e.target.value);
            }}
          >
            <option value="">Select an option</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="Cash">Cash</option>
            <option value="UPI">UPI</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
        </div>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
};
