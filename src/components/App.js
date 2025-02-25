import React, { useEffect, useState } from "react";
import AccountContainer from "./AccountContainer";

function App() {
  
  const[transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm]=useState("");

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data))
  }, [])

  function addTransaction(newTransaction){
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(newTransaction),
    })
      .then((response) => response.json())
      .then((data) => setTransactions([...transactions, data]));

  }


  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer transactions ={transactions} addTransaction={addTransaction}
        searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
    </div>
  );
}

export default App;
