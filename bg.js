var bg = function(game) {
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
    this.image.src = 'assets/bg.png'
  }.bind(this);

  this.update = function() {
    this.x--;
    if (this.x == -288) {
      this.x = 0;
    }
  }

  this.draw = function() {
    if( this.loaded ) return;
    this.game.context.drawImage(this.image, this.x, 0);
    this.game.context.drawImage(this.image, this.x + 288, 0);
  }
}
