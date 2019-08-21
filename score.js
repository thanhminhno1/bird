class score {
  constructor(game) {
    this.game = game;
  }

  draw() {
    this.game.context.font = "50px";
    this.game.context.fillStyle = "red";
    this.game.context.fillText(this.game.scorePoint, 150, 30, 150);
  }
}
