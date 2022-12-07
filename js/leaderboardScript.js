var userArray = new Array();        // creating userArray

// retrieving all data (keys and values) and store in userArray
for (var i = 0; i < localStorage.length; i++){
    
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
        
    userArray[i] = JSON.parse(value);
    
    // Sort players according to their score (highest to lowest)
    var sortedPlayers = userArray.sort(function(a, b){
      return b.currentscore - a.currentscore
    });
    
}

// creating table using javascript
var table = document.createElement('table'),
    thead = document.createElement('thead'),
    tbody = document.createElement('tbody'),
    th,
    tr,
    td;
    
    // Rank text as header
    th = document.createElement('th'),          
    th.innerHTML="Rank";
    table.appendChild(th);
    
    // Username text as header
    th = document.createElement('th'),          
    th.innerHTML="Username";
    table.appendChild(th);
    
    // Score text as header
    th = document.createElement('th'); 
    th.innerHTML= "Score"
    table.appendChild(th);

    table.appendChild(thead);            
    table.appendChild(tbody);        
    document.body.appendChild(table);

// create row if data exist
for (let i = 0; i < userArray.length; i++){
        
    var ranking;
    ranking = i + 1;        // increment ranking by 1
    
    tr = document.createElement('tr'),
    
    // Display ranking data
    td = document.createElement('td');
    td.innerHTML = ranking;
    tr.appendChild(td);
    
    // Display username data
    td = document.createElement('td');
    td.innerHTML = userArray[i].username;
    tr.appendChild(td);

    // Display score data
    td = document.createElement('td');
    td.innerHTML = userArray[i].currentscore;
    tr.appendChild(td);
    tbody.appendChild(tr);         
}