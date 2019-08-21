class bird {
  constructor(game) {
    this.game = game;
    this.images = [];
    this.img1Loaded = false;
    this.img2Loaded = false;
    this.img3Loaded = false;
    this.currentFrame = 1;
    this.currentImage = null;
    this.currentImageIndex = 0;

    this.x = 70;
    this.y = 300;
    this.speedY = 0;
    this.acceleration = 0.5;
    this.direction = 'down';

    this.loadImages();
  }

  loadImages() {
    var img1 = new Image();
    var img2 = new Image();
    var img3 = new Image();
    img1.onload = () => {
      this.img1Loaded = true;
      this.images.push(img1);
    };

    img2.onload = () => {
      this.img2Loaded = true;
      this.images.push(img2);
    };

    img3.onload = () => {
      this.img3Loaded = true;
      this.images.push(img3);
    };

    img1.src = 'assets/bluebird-midflap.png';
    img2.src = 'assets/bluebird-upflap.png';
    img3.src = 'assets/bluebird-downflap.png';
  }

  update() {
    if( !this.img1Loaded || !this.img1Loaded || !this.img1Loaded) return;
    this.currentImage = this.images[0];
    this.currentFrame++;
    if ( this.currentFrame % 5 == 0) {
      this.changeImage();
    }
    if (!this.game.gameStarted) return;
    if (this.y <= 480) {
      this.speedY += this.acceleration;
      this.y+= this.speedY;
    } else {
      this.y = 480;
    }

    if ( this.y >= 422 ) {
      this.game.gameOver = true;
    }
  }

  flap() {
    this.speedY = -8;
  }

  checkHitPipe() {
    if(
      (
        this.x + 34 > this.game.pipe.x &&
        this.x < this.game.pipe.x + 52
      )
      && (
        this.y < this.game.pipe.y -150 || this.y + 24 > this.game.pipe.y
      )
    ) {
      this.game.gameOver = true;
    }
  }

  changeImage() {
    if (this.currentImageIndex == 2) {
      this.currentImageIndex = 1;
    } else {
      this.currentImageIndex++;
    }
    this.currentImage = this.images[this.currentImageIndex];
  }

  draw() {
    if( this.img1Loaded && this.img2Loaded && this.img3Loaded) {
      this.game.context.drawImage(this.currentImage, this.x, this.y);
      this.checkHitPipe();
    }
  }
}
