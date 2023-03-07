

		function calculateTeam1Avg() {
			var score1 = 
			document.getElementById("score1").value;
			var score2 =
			document.getElementById("score2").value;
			var score3 =
			document.getElementById("score3").value;
			var result1 = (parseInt(score1) + parseInt(score2) + parseInt(score3)) / 3
			// document.getElementById("result1").innerHTML = Number(result1);
			return result1;	
	}


		function calculateTeam2Avg() {
			var score4 =
			document.getElementById("score4").value;
			var score5 =
			document.getElementById("score5").value;
			var score6 =
			document.getElementById("score6").value;
			var result2 = (parseInt(score4) + parseInt(score5) + parseInt(score6)) / 3;
			// document.getElementById("result2").innerHTML = Number(result2);
			return result2;
		}
		const mesaj = document.getElementById("rezultat")



		function calculate() {
			const minimumScore = 100;
			var result1 = calculateTeam1Avg();
			var result2 = calculateTeam2Avg();
			if (result1 >= minimumScore && result2 >= minimumScore) {
				if (result1 > result2) {
					
					document.getElementById("win-message").innerHTML = `First team wins with score of ${result1}, in front of Second Team with score of ${result2}!`;
					document.getElementById("winner").innerHTML = `First Player Wins!!!`
				} else if (result1 == result2) {
					document.getElementById("win-message").innerHTML = `Both teams have score of: ${result1}`;
					document.getElementById("winner").innerHTML = `Draw...`
				} else if (result1 < result2) {
					document.getElementById("win-message").innerHTML = `Second Team wins with score of ${result2}, in front of First Team with score of ${result1}!`;
					document.getElementById("winner").innerHTML = `Second Player Wins!!!`

				}
			} else {
				document.getElementById("win-message").innerHTML = `No team get calificated, they need minimum of 100 point for each team to won, they have ${result1} and ${result2}`;
			}
			document.getElementById("win-message").style.visibility = "visible";
			document.getElementById("winner").style.display = "flex";


		

}
		// document.getElementById("calculate-button").addEventListener("click", calculate);





		// var rezultat = document.getElementById("rezultat").innerHTML = calculate();
		// console.log(rezultat)

// Ce face innerHTML?
