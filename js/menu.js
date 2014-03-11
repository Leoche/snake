function menu(game){
	game.stage.backgroundColor = '#91CBE8';
	var x = game.width/2;
	var y = game.height/2-200;
	var marge = 30;
	var logo = game.add.sprite(x,y,'logo');
	logo.anchor.setTo(0.5,0);
	var button = new Button(game,x,y+logo.height+marge,"Salut");
}