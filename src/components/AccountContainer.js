import React from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer({transactions, addTransaction, searchTerm , setSearchTerm}) {

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <AddTransactionForm addTransaction={addTransaction}/>
      <TransactionsList transactions={filteredTransactions}/>
    </div>
  );
}

export default AccountContainer;
