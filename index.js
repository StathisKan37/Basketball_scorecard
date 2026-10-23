let home_points= 0;
let guest_points=0;
let game_count= 0;

function score_add(player, points){
	if (player == 'home'){
		home_points += points;
		document.getElementById(player).textContent = home_points;}
	if (player == 'guest'){
		guest_points += points;
		document.getElementById(player).textContent = guest_points;}
	}

function score_sub(player, points){
	if (player == 'home' && home_points>=points){
		home_points -= points;
		document.getElementById(player).textContent = home_points;}
	if (player == 'guest' && guest_points>=points){
		guest_points -= points;
		document.getElementById(player).textContent = guest_points;}
	}

function new_game(){
	home_points=0;
	guest_points=0;
	document.getElementById('home').textContent = 0;
	document.getElementById('guest').textContent = 0;
	}

function save_game(){
	game_count += 1;
	const saved_game = `Game ${game_count}: Home(${home_points}) Guest(${guest_points})<br>`;
	document.getElementById('saved_games').insertAdjacentHTML('beforeend', saved_game);
	
	new_game();
	}
