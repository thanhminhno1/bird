class pipe {
  constructor(game) {
    this.game = game;
    this.imageUp = null;
    this.imageDown = null;
    this.img1Loaded = false;
    this.img2Loaded = false;
    this.loaded = false;
    this.x = 300;
    this.y = 320;
    this.loadImage();
  }


  loadImage() {
    this.imageUp = new Image();
    this.imageDown = new Image();
    this.imageUp.onload = () => {
      this.img1Loaded = true;
    }
    this.imageUp.src = 'assets/pipe1.png'
    this.imageDown.onload = () => {
      this.img2Loaded = true;
    }
    this.imageDown.src = 'assets/pipe.png'
    if ( this.img1Loaded && this.img2Loaded ) {
      this.loaded = true;
    }
  };

  update() {
    this.x -= 2;
    if(this.x == 26) {
      this.game.scorePoint ++;
    }
    if (this.x == -54) {
      this.y = 100 + (Math.random() * 320);
      this.x = 300;
    }
  }

  draw(x, y) {
    if( this.loaded ) return;
    this.game.context.drawImage(this.imageUp, this.x, this.y - 150 - 320);
    this.game.context.drawImage(this.imageDown, this.x , this.y);
  }
}
