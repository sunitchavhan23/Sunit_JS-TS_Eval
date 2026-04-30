// Q.1

const connection = require("./db");

//Insert Data
function insertAccounts() {
  const sql = "INSERT INTO Account (acc_no, name, balance) VALUES ?";
  const data = [
    [1, "Amit", 1000],
    [2, "Rahul", 2000]
  ];

  connection.query(sql, [data], (err) => {
    if (err) throw err;
    console.log("Data added");
    showAccounts();
  });
}


// Show Data
function showAccounts() {
  connection.query("SELECT * FROM Account", (err, results) => {
    if (err) throw err;
    console.log("\n Show Data");
    console.table(results);
    updateAccount();
  });
}


//Update Data
function updateAccount() {
  const sql = "UPDATE Account SET balance = ? WHERE acc_no = ?";
  const data = [1500, 1];

  connection.query(sql, data, (err) => {
    if (err) throw err;
    console.log("Data Updated");
    showAfterUpdate();
  });
}

function showAfterUpdate() {
  connection.query("SELECT * FROM Account", (err, results) => {
    if (err) throw err;
    console.log("\n Data After Update");
    console.table(results);
    deleteAccount();
  });
}


// Delete Data
function deleteAccount() {
  const sql = "DELETE FROM Account WHERE acc_no = ?";
  const data = [1];

  connection.query(sql, data, (err) => {
    if (err) throw err;
    console.log("Data Deleted");
    showAfterDelete();
  });
}


// Data Show after record delete
function showAfterDelete() {
  connection.query("SELECT * FROM Account", (err, results) => {
    if (err) throw err;
    console.log("\n Table Data");
    console.table(results);
    connection.end();
  });
}

insertAccounts();