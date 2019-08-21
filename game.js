class game {
  constructor() {
    this.width = 288;
    this.height = 512;
    this.gameOver = false;
    this.gameStarted = false;
    this.scorePoint = 0;

    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    document.body.appendChild(this.canvas);

    this.bird = new bird(this)
    this.bg = new bg(this);
    this.base = new base(this);
    this.pipe = new pipe(this);
    this.score = new score(this);

    this.listenMouse();
    this.loop();
  }

  loop() {
    this.update();
    this.draw();
    setTimeout(this.loop.bind(this), 33);
  };

  update() {
    if ( this.gameOver ) return;
    this.bg.update();
    this.base.update();
    if ( this.gameStarted ) this.pipe.update();
    this.bird.update();
  }

  listenMouse() {
    this.canvas.addEventListener('click', () => {
      this.bird.flap();
      if(!this.gameStarted) {
        this.gameStarted = true;
      }
    })
  }

  draw() {
    if ( this.gameOver ) {
      let gameover = new Image();
      gameover.src = 'assets/gameover.png';
      this.context.drawImage(gameover, 48, 235);
      return;
    };
    this.bg.draw();
    if ( this.gameStarted ) {
      this.pipe.draw();
      this.score.draw();
    } else {
      let peddingScreen = new Image();
      peddingScreen.src = 'assets/message.png';
      this.context.drawImage(peddingScreen, 52, 122);
    }
    this.base.draw();
    this.bird.draw();
    console.log(this.scorePoint);
  }
}

var g = new game();
