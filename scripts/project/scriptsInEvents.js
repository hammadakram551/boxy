


const scriptsInEvents = {

	async Events_Event2_Act3(runtime, localVars)
	{
		
		
		
		// // function func(){
		// // const currentScoreSpan = document.getElementById('current-score');
		//     let currentScore = 0;
		// 	 let authToken = "";
		
		// //     const authStatus = document.getElementById('auth-status');
		// //     const authDataDiv = document.getElementById('auth-data');
		// // 	const currentScoreSpan = document.getElementById('current-score');
		// // 	let currentScore = 0;
		
		// console.log("before");
		
		// // Telegram.WebApp.ready();
		// // const authData = Telegram.WebApp.initData;
		
		// // runtime.globalVars.authDataVar = window.authData;
		// // authDataDiv.innerText = 
		// alert("authData "+window.authData);
		// console.log("after");
		
		
		// fetch('https://popular-hyena-proven.ngrok-free.app/auth/telegramAuth', { // Update this URL to your backend endpoint
		//       method: 'POST',
		//       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		//       // credentials: 'include',
		//       body: new URLSearchParams({ data: window.authData }),
		//     })
		//     .then(response => response.json())
		//     .then(data => {
		//       if (data.error) {
		// //         authStatus.innerText = 'Authorization failed!';
		//         console.error('Authorization failed:', data.error);
		// 		alert('Authorization failed: '+ data.error)
		//       } else {
		// //         authStatus.innerText = 'Authorization succeeded!';
		// //         gameDiv.style.display = 'block';
		//         alert('Authorization succeeded:'+ data);
		//         window.authToken = data.token;
		// 		authToken = data.token;// Save the token for later use
		//         window.userId = data.userId; // Save the userId for later use
		
		//         // Display the token for debugging purposes
		//         alert('JWT Token: ' + authToken);
		//         console.log('JWT Token:', authToken);
		
		//         // Update the current score
		//         currentScore = data.currentScore;
		// 		alert("currentScore: "+currentScore)
		// //         currentScoreSpan.innerText = currentScore;
		//       }
		//     })
		//     .catch(error => {
		//       alert('Error during authorization.');
		//       console.error('Error:', error);
		// 	  alert('error: '+ error)
		//     });
		
		
		// // }
		// // window.func = func;
		
	},

	async Events_Event4_Act1(runtime, localVars)
	{

// //     function submitScore() {
// 	alert("Score is: "+runtime.globalVars.score)
// 	let authToken = window.authToken;
// 	let user_id = window.userId;
// // 	runtime.globalVars.authToken = window.authToken;
// // 	const currentScoreSpan = document.getElementById('current-score');
//     let currentScore = 0;
//       alert("userId: "+user_id+" And JWT is "+window.authToken);
//       fetch('https://popular-hyena-proven.ngrok-free.app/balance/submit', {
//         method: 'POST', // Ensure this is a POST request
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${authToken}`,
//         },
//         body: JSON.stringify({ user_id, score: runtime.globalVars.score }), // Include userId
//         // credentials: 'include' // Ensure cookies are sent with the request
//       })
//       .then(response => response.json())
//       .then(data => {
//         if (data.error) {
//           console.error('Error updating score:', data.error);
// 		  alert('Error updating score: '+ data.error);
//         } else {
//           console.log('Score updated successfully:', data);
//           alert('Score updated successfully! JWT Token: ' + authToken);
//           console.log('JWT Token used for updating score:', authToken);
          
// 		  fetch('https://popular-hyena-proven.ngrok-free.app/balance/score', {
//         method: 'POST', // Ensure this is a POST request
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${authToken}`,
//         },
// })
//           .then(response => {
//     alert('Response status: '+ response.status);
//     alert('Response headers: '+ response.headers);
//     return response.text(); // Change to text to log the full response
// })
// .then(responseText => {
//     alert('Response text: '+ responseText);
// 	console.log('Response text: ', responseText);
//     const scoreData = JSON.parse(responseText);
//     currentScore = scoreData[0]?.scores || 0;
//     alert("Score is "+ currentScore);
// })
//           .catch(error => {console.error('Error fetching updated score:', error)
		  
// 		  alert('Error fetching updated score: '+ error);
// 		  alert( "And jwt is: "+window.authToken)
// 		  });
//         }
//       })
//       .catch(error => {
//         console.error('Error submitting score:', error);
//         alert('Error submitting score. Please try again. error: '+error);
//       });
// //     }


// // window.submitScore = submitScore;
	},

	async Events_Event4_Act3(runtime, localVars)
	{
		alert("helllllllll")
	},

	async Events_Event64_Act16(runtime, localVars)
	{

//     function submitScore() {
	alert("Score is: "+runtime.globalVars.score)
	let authToken = window.authToken;
	let user_id = window.userId;
// 	runtime.globalVars.authToken = window.authToken;
// 	const currentScoreSpan = document.getElementById('current-score');
    let currentScore = 0;
      alert("userId: "+user_id+" And JWT is "+window.authToken);
      fetch('https://popular-hyena-proven.ngrok-free.app/balance/submit', {
        method: 'POST', // Ensure this is a POST request
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
        body: JSON.stringify({ user_id, score: runtime.globalVars.Previous_Score_var+runtime.globalVars.score }), // Include userId
        // credentials: 'include' // Ensure cookies are sent with the request
      })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          console.error('Error updating score:', data.error);
		  alert('Error updating score: '+ data.error);
        } else {
          console.log('Score updated successfully:', data);
          alert('Score updated successfully! JWT Token: ' + authToken);
          console.log('JWT Token used for updating score:', authToken);
          
		  fetch('https://popular-hyena-proven.ngrok-free.app/balance/score', {
        method: 'POST', // Ensure this is a POST request
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
})
          .then(response => {
    alert('Response status: '+ response.status);
    alert('Response headers: '+ response.headers);
    return response.text(); // Change to text to log the full response
})
.then(responseText => {
    alert('Response text: '+ responseText);
	console.log('Response text: ', responseText);
    const scoreData = JSON.parse(responseText);
    currentScore = scoreData[0]?.scores || 0;
    alert("Score is "+ currentScore);
})
          .catch(error => {console.error('Error fetching updated score:', error)
		  
		  alert('Error fetching updated score: '+ error);
		  alert( "And jwt is: "+window.authToken)
		  });
        }
      })
      .catch(error => {
        console.error('Error submitting score:', error);
        alert('Error submitting score. Please try again. error: '+error);
      });
//     }


// window.submitScore = submitScore;
	},

	async Events_Event70_Act2(runtime, localVars)
	{
		if(runtime.globalVars.whichAnim=="first"){
		runtime.globalVars.whichAnim="second";
		}else if(runtime.globalVars.whichAnim=="second"){
		runtime.globalVars.whichAnim = "third";
		}else{
		 runtime.globalVars.whichAnim="first"
		}
	},

	async Landing_eventSheet_Event3_Act2(runtime, localVars)
	{
		
		
		if(window.authData.includes("username")){
		runtime.globalVars.isUsername = true;
		alert("Username is present: "+ window.authData.includes("username"));
		// function func(){
		// const currentScoreSpan = document.getElementById('current-score');
		    let currentScore = 0;
			 let authToken = "";
		
		//     const authStatus = document.getElementById('auth-status');
		//     const authDataDiv = document.getElementById('auth-data');
		// 	const currentScoreSpan = document.getElementById('current-score');
		// 	let currentScore = 0;
		
		console.log("before");
		
		// Telegram.WebApp.ready();
		// const authData = Telegram.WebApp.initData;
		
		// runtime.globalVars.authDataVar = window.authData;
		// authDataDiv.innerText = 
		alert("authData "+window.authData);
		console.log("after");
		
		
		fetch('https://popular-hyena-proven.ngrok-free.app/auth/telegramAuth', { // Update this URL to your backend endpoint
		      method: 'POST',
		      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		      // credentials: 'include',
		      body: new URLSearchParams({ data: window.authData }),
		    })
		    .then(response => response.json())
		    .then(data => {
		      if (data.error) {
		//         authStatus.innerText = 'Authorization failed!';
		        console.error('Authorization failed:', data.error);
				alert('Authorization failed: '+ data.error)
		      } else {
		//         authStatus.innerText = 'Authorization succeeded!';
		//         gameDiv.style.display = 'block';
		        alert('Authorization succeeded:'+ data);
				const{token,scores,wallet_address,tele_id } = data
		        window.authToken = token;
				authToken = token;// Save the token for later use
		        window.userId = tele_id; // Save the userId for later use
				runtime.globalVars.wallet_address_var = "Your Wallet Address:\n"+wallet_address
		// 		runtime.globalVars.username = data.username;
		
		        // Display the token for debugging purposes
		        alert('JWT Token: ' + authToken);
		        console.log('JWT Token:', authToken);
		
		        // Update the current score
		        currentScore = scores;
				alert("currentScore: "+currentScore)
				runtime.globalVars.Previous_Score_var = currentScore;
			      
		//         currentScoreSpan.innerText = currentScore;
		      }
		    })
		    .catch(error => {
		      alert('Error during authorization.');
		      console.error('Error:', error);
			  alert('error: '+ error)
		    });
		
		}else{
		alert("window.authdata is:" +window.authData)
		}
		// }
		// window.func = func;
		
	},

	async Main_eventSheet_Event1_Act2(runtime, localVars)
	{
		const play_shadow = document.getElementById('play_shadow');
		
		play_shadow.style.borderRadius = '20px'
		play_shadow.style.boxShadow = '0px 8px 16px 0px rgba(255,255,255,0.2), 0px 6px 20px 0px rgba(255,255,255,0.19)'
		
		const lead_shadow = document.getElementById('lead_shadow');
		
		lead_shadow.style.borderRadius = '20px'
		lead_shadow.style.boxShadow = '0px 8px 16px 0px rgba(255,255,255,0.2), 0px 6px 20px 0px rgba(255,255,255,0.19)'
		
		const add_shadow = document.getElementById('add_shadow');
		
		add_shadow.style.borderRadius = '20px'
		add_shadow.style.boxShadow = '0px 8px 16px 0px rgba(255,255,255,0.2), 0px 6px 20px 0px rgba(255,255,255,0.19)'
	},

	async Main_eventSheet_Event3_Act1(runtime, localVars)
	{
// // function showLeaderboard() {
//     console.log('Leaderboard button clicked');
//     const cache = JSON.parse(localStorage.getItem('leaderboardData'));
//     const cacheTimestamp = localStorage.getItem('leaderboardTimestamp');

//     const now = new Date().getTime();
//     const cacheValidDuration = 5 * 60 * 1000; // 5 minutes in milliseconds

//     if (cache && cacheTimestamp && now - cacheTimestamp < cacheValidDuration) {
//         console.log('Using cached data');
//         setTimeout(() => {
//             displayLeaderboard(cache);
//         }, 2000); // Wait for 2 seconds before displaying the leaderboard
//     } else {
//         console.log('Fetching leaderboard data');
//         fetch('https://popular-hyena-proven.ngrok-free.app/balance/leaderboard', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 // 'Authorization': `Bearer ${authToken}`,
//             },
//         })
//         .then(response => response.json())
//         .then(leaderboardData => {
//             console.log('Fetched leaderboard data:', leaderboardData);
//             localStorage.setItem('leaderboardData', JSON.stringify(leaderboardData)); // Cache the data
//             localStorage.setItem('leaderboardTimestamp', now); // Cache the timestamp
//             displayLeaderboard(leaderboardData);
//         })
//         .catch(error => console.error('Error fetching leaderboard:', error));
//     }
// // }

// function displayLeaderboard(leaderboardData) {
//     const container = document.getElementById('leaderboardContainer');
//     if (!container) {
//         console.error("Leaderboard container not found");
//         return;
//     }

//     console.log('Displaying leaderboard:', leaderboardData);
//     container.innerHTML = ''; // Clear any existing content

// //     const title = document.createElement('h1');
// //     title.innerText = 'LEADERBOARD';
// //     title.style.color = 'white';
// //     title.style.textAlign = 'center';
// //     title.style.fontSize = '36px';
// //     title.style.fontFamily = 'Arial, sans-serif';
// // 	title.style.justifyContent = 'center'

// //     container.appendChild(title);

//     const headerDiv = document.createElement('div');
//     headerDiv.style.display = 'flex';
//     headerDiv.style.justifyContent = 'space-between';
//     headerDiv.style.alignItems = 'center';
//     headerDiv.style.width = '80%';
//     headerDiv.style.maxWidth = '400px';
//     headerDiv.style.padding = '10px 20px';
//     headerDiv.style.marginBottom = '10px';
//     headerDiv.style.borderBottom = '2px solid white';
//     headerDiv.style.color = 'white';
//     headerDiv.style.fontFamily = 'Arial, sans-serif';
//     headerDiv.style.fontWeight = 'bold';
// 	headerDiv.style.textAlign = 'center';

//     const rankHeader = document.createElement('div');
//     rankHeader.innerText = '#';

//     const userIdHeader = document.createElement('div');
//     userIdHeader.innerText = 'User ID';

//     const scoreHeader = document.createElement('div');
//     scoreHeader.innerText = 'Score';

//     headerDiv.appendChild(rankHeader);
//     headerDiv.appendChild(userIdHeader);
//     headerDiv.appendChild(scoreHeader);
//     container.appendChild(headerDiv);

//     const leaderboard = document.createElement('div');
//     leaderboard.style.display = 'flex';
//     leaderboard.style.flexDirection = 'column';
//     leaderboard.style.alignItems = 'center';
//     leaderboard.style.marginTop = '20px';
//     leaderboard.style.maxHeight = '300px'; // Adjust height as needed
//     leaderboard.style.overflowY = 'auto'; // Make it scrollable

//     leaderboardData.forEach((item, index) => {
//         const entry = document.createElement('div');
//         entry.style.display = 'flex';
//         entry.style.justifyContent = 'space-between';
//         entry.style.alignItems = 'center';
//         entry.style.width = '80%';
//         entry.style.maxWidth = '400px';
//         entry.style.padding = '10px 20px';
//         entry.style.marginBottom = '10px';
//         entry.style.borderRadius = '5px';
//         entry.style.backgroundColor = 'black';
// // 		['#FF5733', '#FF8D1A', '#FFC300', '#FF5733', '#C70039'][index % 5];
//         entry.style.color = 'white';
//         entry.style.fontFamily = 'Arial, sans-serif';

//         const rank = document.createElement('div');
//         rank.innerText = index + 1;

//         const userId = document.createElement('div');
//         userId.innerText = item.telegram_user_id;

//         const score = document.createElement('div');
//         score.innerText = item.scores;

//         entry.appendChild(rank);
//         entry.appendChild(userId);
//         entry.appendChild(score);

//         leaderboard.appendChild(entry);
//     });

//     container.appendChild(leaderboard);
// }

// // Event listener for the leaderboard button
// // document.getElementById('leaderboardButton').addEventListener('click', showLeaderboard);

	},

	async Main_eventSheet_Event3_Act2(runtime, localVars)
	{
console.log('Leaderboard button clicked');
    const cache = JSON.parse(localStorage.getItem('leaderboardData'));
    const cacheTimestamp = localStorage.getItem('leaderboardTimestamp');

    const now = new Date().getTime();
    const cacheValidDuration = 5 * 60 * 1000; // 5 minutes in milliseconds

    if (cache && cacheTimestamp && now - cacheTimestamp < cacheValidDuration) {
        console.log('Using cached data');
        setTimeout(() => {
            displayLeaderboard(cache);
        }, 2000); // Wait for 2 seconds before displaying the leaderboard
    } else {
        console.log('Fetching leaderboard data');
        fetch('https://popular-hyena-proven.ngrok-free.app/balance/leaderboard', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${authToken}`,
            },
        })
        .then(response => response.json())
        .then(leaderboardData => {
            console.log('Fetched leaderboard data:', leaderboardData);
            localStorage.setItem('leaderboardData', JSON.stringify(leaderboardData)); // Cache the data
            localStorage.setItem('leaderboardTimestamp', now); // Cache the timestamp
            displayLeaderboard(leaderboardData);
        })
        .catch(error => console.error('Error fetching leaderboard:', error));
    }
	
	function displayLeaderboard(leaderboardData) {
    const container = document.getElementById('leaderboardContainer');
    if (!container) {
        console.error("Leaderboard container not found");
        return;
    }
// 	runtime.globalVars.leaderBoardVar = ""

    console.log('Displaying leaderboard:', leaderboardData);
    container.innerHTML = ''; // Clear any existing content

    const headerDiv = document.createElement('div');
    headerDiv.style.display = 'grid';
//     headerDiv.style.gridTemplateColumns = '1fr 2fr 1fr'; // Adjust columns widths
    headerDiv.style.justifyContent = 'center';
    headerDiv.style.alignItems = 'center';
    headerDiv.style.width = '100%';
    headerDiv.style.padding = '10px 20px';
//     headerDiv.style.marginBottom = '10px';
//     headerDiv.style.borderBottom = '2px solid white';
    headerDiv.style.color = 'white';
    headerDiv.style.fontFamily = 'Arial, sans-serif';
    headerDiv.style.fontWeight = 'bold';
    headerDiv.style.textAlign = 'center';

    const rankHeader = document.createElement('div');
//     rankHeader.innerText = '#';
    rankHeader.innerText = ' ';

    const userIdHeader = document.createElement('div');
//     userIdHeader.innerText = 'User ID';
    userIdHeader.innerText = ' ';

    const scoreHeader = document.createElement('div');
//     scoreHeader.innerText = 'Score';
    scoreHeader.innerText = ' ';

    headerDiv.appendChild(rankHeader);
    headerDiv.appendChild(userIdHeader);
    headerDiv.appendChild(scoreHeader);
    container.appendChild(headerDiv);

    const leaderboard = document.createElement('div');
//     leaderboard.style.display = 'grid';
//     leaderboard.style.gridTemplateColumns = '1fr 2fr 1fr'; // Adjust columns widths
    leaderboard.style.justifyContent = 'center';
    leaderboard.style.alignItems = 'center';
    leaderboard.style.marginTop = '20px';
    leaderboard.style.maxHeight = '300px'; // Adjust height as needed
    leaderboard.style.overflowY = 'auto'; // Make it scrollable
    leaderboard.style.width = '100%';
	leaderboard.style.display = "none"

    leaderboardData.forEach((item, index) => {
        const entry = document.createElement('div');
        entry.style.display = 'contents'; // Allows the grid to be used directly on children
        entry.style.width = '100%';
        entry.style.padding = '10px 20px';
//         entry.style.marginBottom = '10px';
        entry.style.borderRadius = '5px';
        entry.style.backgroundColor = 'black';
        entry.style.color = 'white';
        entry.style.fontFamily = 'Arial, sans-serif';
        entry.style.textAlign = 'center';

        const rank = document.createElement('div');
        rank.innerText = index + 1;

        const userId = document.createElement('div');
        userId.innerText = item.username;

        const score = document.createElement('div');
        score.innerText = item.scores;

        entry.appendChild(rank);
        entry.appendChild(userId);
        entry.appendChild(score);
// 		runtime.globalVars.leaderBoardVar =`${runtime.globalVars.leaderBoardVar}     ${index+1}            ${item.username}            ${item.scores}\n--------------------------------------------\n`;

		runtime.globalVars.leaderBoardVar =`${runtime.globalVars.leaderBoardVar}${item.username}\n$core: ${item.scores}\n--------------------------------------------\n`;
		runtime.globalVars.leaderBoardVarRank = `${runtime.globalVars.leaderBoardVarRank}${index+1}\n\n \n`;
		

        leaderboard.appendChild(entry);
    });

    container.appendChild(leaderboard);
	
}

	},

	async Leaderboard_eventSheet_Event1_Act5(runtime, localVars)
	{
		const leaderShadow = document.getElementById('leaderShadow');
		
		leaderShadow.style.borderRadius = '20px'
		leaderShadow.style.boxShadow = '0px 8px 16px 0px rgba(255,255,255,0.2), 0px 6px 20px 0px rgba(255,255,255,0.19)'
		
		const leaderBackShadow = document.getElementById('leaderBackShadow');
		
		leaderBackShadow.style.borderRadius = '20px'
		leaderBackShadow.style.boxShadow = '0px 8px 16px 0px rgba(255,255,255,0.2), 0px 6px 20px 0px rgba(255,255,255,0.19)'
		
		
		
		
	},

	async Add_wallet_events_Event1_Act1(runtime, localVars)
	{
		const confirmWallet = document.getElementById('confirmWallet');
		
		// confirmWallet.style.textWidth = "88px"
		
		// confirmWallet.setText = "Change Address"
		confirmWallet.style.cursor = "pointer"
		confirmWallet.style.backgroundColor = 'white'
		confirmWallet.style.borderRadius = '20px'
		confirmWallet.style.boxShadow = '0px 8px 16px 0px rgba(255,255,255,0.1), 0px 6px 20px 0px rgba(255,255,255,0.1)'
		confirmWallet.style.fontSize = "20px"
		
		
		const changeWallet = document.getElementById('changeWallet');
		
		// confirmWallet.style.textWidth = "88px"
		
		// confirmWallet.setText = "Change Address"
		changeWallet.style.cursor = "pointer"
		changeWallet.style.backgroundColor = 'white'
		changeWallet.style.borderRadius = '20px'
		changeWallet.style.boxShadow = '0px 8px 16px 0px rgba(255,255,255,0.1), 0px 6px 20px 0px rgba(255,255,255,0.1)'
		changeWallet.style.fontSize = "20px"
		
		
		const walletInput = document.getElementById('walletInput')
		
		walletInput.style.borderRadius = '20px'
		walletInput.style.boxShadow = '0px 8px 16px 0px rgba(255,255,255,0.1), 0px 6px 20px 0px rgba(255,255,255,0.1)'
		
		
		const back_button_wallet = document.getElementById('back_button_wallet')
		
		back_button_wallet.style.cursor = "pointer"
		back_button_wallet.style.backgroundColor = 'white'
		back_button_wallet.style.borderRadius = '20px'
		back_button_wallet.style.boxShadow = '0px 8px 16px 0px rgba(255,255,255,0.1), 0px 6px 20px 0px rgba(255,255,255,0.1)'
		back_button_wallet.style.fontSize = "20px"
		
		
		
	},

	async Add_wallet_events_Event3_Act1(runtime, localVars)
	{
runtime.globalVars.walletMsg = `Please set your BSC wallet Address.\nInvo will be airdropped to this wallet address.`
	},

	async Add_wallet_events_Event5_Act2(runtime, localVars)
	{
alert(runtime.globalVars.new_address)
const walletAddress = runtime.globalVars.new_address;

const expectedLength = '0x8FFf93E810a2eDaaFc326eDEE51071DA9d398E83'.length;
    if (walletAddress.length !== expectedLength) {
        runtime.globalVars.messages_var = 'Wallet address must be exactly '+ expectedLength + ' characters long.';
        return;
}
// async function updateWalletAddress(walletAddress) {
    const token = window.authToken; // Assuming the JWT token is stored in localStorage

    if (!token) {
        console.error('User is not authenticated.');
		runtime.globalVars.messages_var = 'User is not authenticated.'
        return;
    }

    try {
        const response = await fetch('https://popular-hyena-proven.ngrok-free.app/balance/wallet_address', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // Include the JWT token in the Authorization header
            },
            body: JSON.stringify({ wallet_address: walletAddress }), // Send the wallet address in the request body
        });

        const data = await response.json();

        if (!response.ok) {
            console.error('Error updating wallet address:', data.error || 'Unknown error');
            runtime.globalVars.messages_var = 'Failed to update wallet address.'
            return;
        }

        console.log('Wallet address updated successfully:', data);
        runtime.globalVars.messages_var ='Wallet address updated successfully.'
    } catch (error) {
        console.error('Error making request:', error);
        runtime.globalVars.messages_var ='An error occurred while updating the wallet address.'
    }
// }

// Example usage
 // Replace with the actual wallet address
// updateWalletAddress(walletAddress);
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

