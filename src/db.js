// Requires npm install tedious

const { Connection, Request } = require("tedious");

// Create connection to database
const config = {
  authentication: 
  {
	options: 
	{
      userName: "", // Enter Username
      password: "" //Enter Password
    },
    type: "default"
  },
  server: "", // Enter Server Name
  options: 
  {
    database: "events_db", 
	encrypt: true,
	validateBulkLoadParameters: true
  }
};

// SQL Script variable
var script = 'SELECT * FROM temp_table';

// Azure SQL Server Connection variable
const conn = connectDB();

// Attempt to connect and execute queries if connection goes through
conn.on("connect", err => 
{
	if (err) 
	{
	console.error(err.message);
	} 
	else
	{
	queryDatabaseRows(conn, script);
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


// Query Database Function
function queryDatabaseRows(connect, cmd) 
{
  console.log("Reading rows from the Table...");

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
        console.log(`${rowCount} row(s) returned`);
      }
    }
  );

  request.on("row", columns => 
  {
	columns.forEach(column => 
	{
      console.log("%s\t%s", column.metadata.colName, column.value);
    });
  });

  connect.execSql(request);
}