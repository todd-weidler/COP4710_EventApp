// Requires npm install tedious

const { Connection, Request } = require("tedious");

// Create connection to database
const config = {
  authentication: 
  {
    options: 
    {
      userName: "", // Enter Server Username
      password: ""  // Enter Server Password
    },
    type: "default"
  },
  server: "", // Enter server name
  options: 
  {
    database: "events_db", 
    encrypt: true,
    validateBulkLoadParameters: true
  }
};

// SQL Query variable
// Connects to modules in query.js
var script = require('./query');

// Call a specific query module - this instance calls the Host Event module,
// which returns the events for the host whose username is passed in
var query = script.HostEvents('aaaa');

// Azure SQL Server Connection variable
const conn = connectDB();

// Attempt to connect and execute query if connection goes through
conn.on("connect", err => 
{
	if (err) 
	{
	console.error(err.message);
	} 
	else
	{
    queryDatabaseRows(conn, query);
	}
});

/*================================= Reusable Functions =================================*/

// Establish connection to Azure SQL Server Function
function connectDB()
{
	const connection = new Connection(config);

	connection.connect();

	return connection;
}


// Query Database Rows Function
// May need to change to return json file to front end
// Currently returns results to console
function queryDatabaseRows(connect, cmd) 
{
  //console.log("Reading rows from the Table...");

  // Read all rows from table
  const request = new Request(
    cmd,
	(err, rowCount) => 
	{
	  if (err) 
	  {
        console.error(err.message);
	  } 
	  else 
	  {
        //console.log(`${rowCount} row(s) returned`);
    }
  } );

  request.on("row", columns => 
  {
	columns.forEach(column => 
	{
      console.log("%s\t%s", column.metadata.colName, column.value);
    });
  });

  connect.execSql(request);
}