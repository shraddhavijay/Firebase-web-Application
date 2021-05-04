// Initialize chat_module_Ref instance
var chat_module_Ref = databaseRef.child('Chat_module');

function init() {
	// This function replaces the data in the chat_module_Ref with the new data in data.js
	chat_module_Ref.set(data);
}


function fetchData() {
	// This function is used to fetch data from firebase chat_module_Ref
	chat_module_Ref.child("members").get().then((snapshot) => {
		if (snapshot.exists()) {
			console.log(snapshot.val());
		} else {
			console.log("No data available");
		}
	}).catch((error) => {
		console.error(error);
	});

}

function addData() {
	// This function is used add data items into firebase chat_module_Ref
	groupName_val = 'group4';
	title_val = 'CSS Official';
	description_val = 'Notes sharing of css';

	//adding data using set function
	chat_module_Ref.child('groups/'+groupName_val).set({
		title: title_val,
		description: description_val,
	});

}

function updateData() {
	// This function is used update data items into firebase chat_module_Ref

	// updating at single location. This is similar to the Set Function
	chat_module_Ref.child('messages/group1/msg1/').update({
		'message': 'Hiii'
	});

	// updating at multiple locations
	msg1 = 'Hello'
	msg2 = 'Good Afternoon'
	var updates = {};
	updates['messages/group1/msg2/message/'] = msg1;
	updates['messages/group2/msg1/message/'] = msg2;
	chat_module_Ref.update(updates);
}

function removeData() {
	// This function is used to update data items into firebase chat_module_Ref

	// removing from single location. This is similar to the Set Function
	/* chat_module_Ref.child('messages/group1/msg3').remove(); */

	// removing from multiple locations using update function
	var removeItemList = {};
	removeItemList['messages/group1/msg2'] = null;
	removeItemList['messages/group2/msg3'] = null;
	chat_module_Ref.update(removeItemList);
}