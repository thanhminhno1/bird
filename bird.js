var bird = function(game) {
  this.game = game;
  this.images = [];
  this.img1Loaded = false;
  this.img2Loaded = false;
  this.img3Loaded = false;
  this.currentFrame = 1;
  this.currentImage = null;
  this.currentImageIndex = 0;

  this.x = 70;
  this.y = 0;
  this.speedY = 0;
  this.acceleration = 1;
  this.direction = 'down';

  this.init = function() {
    this.loadImages();
  }

  this.loadImages = function() {
    var img1 = new Image();
    var img2 = new Image();
    var img3 = new Image();
    img1.onload = function() {
      this.img1Loaded = true;
      this.images.push(img1);
    }.bind(this);

    img2.onload = function() {
      this.img2Loaded = true;
      this.images.push(img2);
    }.bind(this);

    img3.onload = function() {
      this.img3Loaded = true;
      this.images.push(img3);
    }.bind(this);

    img1.src = 'assets/bluebird-midflap.png';
    img2.src = 'assets/bluebird-upflap.png';
    img3.src = 'assets/bluebird-downflap.png';

  }.bind(this);

  this.update = function() {
    if( !this.img1Loaded || !this.img1Loaded || !this.img1Loaded) return;
    this.currentImage = this.images[0];
    this.currentFrame++;
    if ( this.currentFrame % 5 == 0) {
      this.changeImage();
    }
    if (this.y <= 480) {
      this.speedY += this.acceleration;
      this.y+= this.speedY;
    } else {
      this.y = 480;
    }

    if ( this.y >= 450 ) {
      this.game.gameOver = true;
    }
    this.checkHitPipe();

  }.bind(this);

  this.flap = function() {
    this.speedY = -15;
  }

  this.checkHitPipe = function() {
    if(
      (
        this.x + 34 > this.game.pipe.x &&
        this.x < this.game.pipe.x + 52
      )
      && (
        this.y < this.game.pipe.y -100 || this.y + 24 > this.game.pipe.y
      )
    ) {
      this.game.gameOver = true;
    }
  }.bind(this);

  this.changeImage = function() {
    if (this.currentImageIndex == 2) {
      this.currentImageIndex = 1;
    } else {
      this.currentImageIndex++;
    }
    this.currentImage = this.images[this.currentImageIndex];
  }.bind(this);

  this.draw = function() {
    if( this.img1Loaded && this.img2Loaded && this.img3Loaded) {
      this.game.context.drawImage(this.currentImage, this.x, this.y);
    }
  }.bind(this);
}
