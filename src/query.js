// Query modules 

module.exports ={

selectAllTemp: function()
{
    var query = "SELECT * FROM temp_table";

    return query;
},

// Get all events in database
AllEvents: function()
{
   var query = "select * from event where end_date > GETDATE()";

   return query;
},

// Get all past events
AllPastEvents: function()
{
   var query = "select * from event where end_date < GETDATE()";

   return query;
},

// Get all current/upcoming event
AllCurrentEvents: function()
{
   var query = "select * from event where end_date > GETDATE() or start_date > GETDATE()";

   return query;
},

// Get all locations
AllLocations: function()
{
   var query = "select * from locations;";

   return query;
},

// Get all people
AllUsers: function()
{
   var query = "select * from people;";

   return query;
},

// Get a specific User's Events
// Accepts a username
UserEvents: function(user)
{
   var query = "select E.event_title, E.event_description, E.start_date, E.end_date, E.address, E.url "+ 
   "from event E, people P, participates_in PI "+
   "where '" +user+ "' = P.username and PI.eventid = E.eventid and P.username = PI.username";

   return query;
},

// Get a Specific Host's Events
// Accepts a username
HostEvents: function(user)
{
   var query = "select E.event_title, E.event_description, E.start_date, E.end_date, E.address, E.url "+
   "from event E, people P, hosts H " + 
   "where '" +user+ "' = P.username and H.eventid = E.eventid and P.username = H.username and P.type = 'Admin'";
  
   return query;
},


}