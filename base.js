class base {
  constructor(game) {
    this.game = game;
    this.image = null;
    this.loaded = false;
    this.x = 0;
    this.loadImage();
  }

  loadImage() {
    this.image = new Image();
    this.image.onload = () => {
      this.loaded = true;
    }
    this.image.src = 'assets/base.png'
  };

  update() {
    this.x -= 2;
    if (this.x == -336) {
      this.x = 0;
    }
  }

  draw() {
    if( !this.loaded ) return;
    this.game.context.drawImage(this.image, this.x, this.game.height - 90);
    this.game.context.drawImage(this.image, this.x + 288, this.game.height - 90);
  }
}
