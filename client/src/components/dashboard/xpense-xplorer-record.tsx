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
    <div className="form-container flex flex-col justify-center items-start">
      <form onSubmit={handleSubmit} className="w-full flex flex-col pt-2 pl-12 items-start h-full">
      <h2 className="text-[30px] font-teko">Add New Record: </h2>
        <div className=" w-[90%] flex gap-5 p-2">
          <label className="text-[25px] p-2">Description: </label>
          <input
            type="text"
            required
            className="input text-[25px] bg-white border-2 border-black rounded-[5px] w-full p-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className=" w-[90%] flex gap-5 p-2">
          <label className="text-[25px] p-2">Amount: </label>
          <input
            type="number"
            required
            className="input text-[25px] bg-white border-2 border-black rounded-[5px] w-full p-2"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </div>
        <div className=" w-[90%] flex gap-5 p-2">
          <label className="text-[25px] p-2">Choose Income or Expense: </label>
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
          <label htmlFor="expense" className="text-[25px] p-2">Expense</label>
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
          <label htmlFor="expense" className="text-[25px] p-2">Income</label>
        </div>
        <div className=" w-[90%] flex p-2">
          {transactionType === "expense" && (
            <div className=" w-full flex justify-start">
              <label className="text-[22px] font-montserrat p-2 w-2/5 text-left ">Expense Category: </label>
              <select
                required
                className="text-[20px] font-montserrat bg-white   rounded-[5px] w-full appearance-none"
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
            <div className="b w-full flex justify-start">
              <label className="text-[22px] font-montserrat p-2 w-2/5 text-left ">Income Category: </label>
              <select
                required
                className="text-[25px] bg-white rounded-[5px] w-full p-2 appearance-none"
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
        <div className=" w-[90%] flex gap-5 p-2">
          <label className="text-[22px] font-montserrat p-2 w-2/5 text-left ">Frequency: </label>
          <select
            className="text-[25px] bg-white border-2 border-black rounded-[5px] w-full p-2 appearance-none"
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
        <div className=" w-[90%] flex gap-5 p-2">
          <label className="text-[22px] font-montserrat p-2 w-2/5 text-left ">Payment Method: </label>
          <select
            required
            className="text-[25px] bg-white border-2 border-black rounded-[5px] w-full p-2 appearance-none"
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
        <button type="submit" className="mt-2 w-1/5 text-[18px] text-black font-montserrat bg-white border-2 border-black hover:bg-[#cecece8c]">
          SUBMIT
        </button>
      </form>
    </div>
  );
};
