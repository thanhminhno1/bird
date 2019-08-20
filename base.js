var base = function(game) {
  this.game = game;
  this.image = null;
  this.loaded = false;
  this.x = 0;

  this.init = function() {
    this.loadImage();
  }

  this.loadImage = function() {
    this.image = new Image();
    this.image.onload = function() {
      this.loaded = true;
    }
    this.image.src = 'assets/base.png'
  }.bind(this);

  this.update = function() {
    this.x -= 2;
    if (this.x == -336) {
      this.x = 0;
    }
  }

  this.draw = function() {
    if( this.loaded ) return;
    this.game.context.drawImage(this.image, this.x, this.game.height - 90);
    this.game.context.drawImage(this.image, this.x + 288, this.game.height - 90);
  }
}
