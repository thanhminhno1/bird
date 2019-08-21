class bg {
  constructor(game) {
    this.game = game;
    this.image = null;
    this.loaded = false;
    this.x = 0;
    this.loadImage();
  }

  loadImage() {
    this.image = new Image();
    this.image.onload = function() {
      this.loaded = true;
    }
    this.image.src = 'assets/bg.png'
  };

  update() {
    this.x--;
    if (this.x == -288) {
      this.x = 0;
    }
  }

  draw() {
    if( this.loaded ) return;
    this.game.context.drawImage(this.image, this.x, 0);
    this.game.context.drawImage(this.image, this.x + 288, 0);
  }
}
