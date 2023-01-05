import NewExpense from "../NewExpenses/NewExpense";
import { useState } from "react";
import "../NewExpenses/NewExpense.css";

const ShowExpenseForm = (props) => {
  const [selectedAdd, setSelectedAdd] = useState(false);

  const showExpenseForm = (event) => {
    setSelectedAdd(true);
  };
  const hideExpenseForm = (event) => {
    setSelectedAdd(false)
  }

  if (selectedAdd) {
    return <NewExpense onAddExpenseHandler={props.onAddExpenseHandler}
    onHideExpenseForm={hideExpenseForm} />;
  };

  return (
    <div className="new-expense">
      <button onClick={showExpenseForm}>Add New Expense</button>
    </div>
  );
};

export default ShowExpenseForm;
