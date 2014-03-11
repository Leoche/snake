function Button(game,x,y,text,action){
	this.x = x;
	this.y = y;
	this.text = text;
	this.action = action;
    this.button = game.add.button(x,y,'button',action,this,1,0,2);
    this.button.forceOut = true;
    this.button.anchor.setTo(0.5,0);
}