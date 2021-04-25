function init(){
    // This function replaces the data in the databaseReference with the new data in data.js
    databaseReference.set(data);
}


function fetchData(){
    // This function is used to fetch data from firebase databaseReference
    databaseReference.child("members").get().then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
      
}

function addData(){
    // This function is used add data items into firebase databaseReference
        groupName_val='Group4';
        title_val='CSS Official';
        description_val='Notes sharing of css';

        //adding data using set function
        databaseReference.child('groups'/groupName_val).set({
          title: title_val,
          description: description_val,
        });
       
}

function updateData(){
// This function is used update data items into firebase databaseReference

 // updating at single location. This is similar to the Set Function
 databaseReference.child('messages/group1/msg1/').update({
     'message':'Hiii'
 });

 // updating at multiple locations
  msg1='Hello'
  msg2='Good Afternoon'
  var updates = {};
  updates['messages/group1/msg1/message/' ] = msg1;
  updates['messages/group1/msg2/message/' ] = msg2;
  databaseReference.update(updates);
}

function removeData(){
// This function is used to update data items into firebase databaseReference

// removing from single location. This is similar to the Set Function
 databaseReference.child('messages/group1/msg1/message').remove();

// removing from multiple locations using update function
 var removeItemList = {};
 removeItemList['messages/group1/msg1/message/' ] = null;
 removeItemList['messages/group1/msg2/message' ] = null;
 databaseReference.update(removeItemList);
}


