window.onload = init();
var game;
function init(){
	game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, '', { preload: preload, create: create ,update:update});
	
}
function preload () {
    game.load.spritesheet('button', 'img/button.png',150,36);
    game.load.image('logo', 'img/logo2.png');
}
function create () {
	game.context.translate(0.5, 0.5);
	menu(game);
}
function update(){

}