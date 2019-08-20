var game = function() {
  this.canvas = null;
  this.context = null;
  this.width = 288;
  this.height = 512;

  this.gameOver = false;

  this.init = function() {
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    document.body.appendChild(this.canvas);

    this.bird = new bird(this)
    this.bird.init();

    this.bg = new bg(this);
    this.bg.init();

    this.base = new base(this);
    this.base.init();

    this.pipe = new pipe(this);
    this.pipe.init();

    this.listenMouse()

    this.loop();
  }

  this.loop = function() {
    this.update();
    this.draw();
    setTimeout(this.loop, 33)
  }.bind(this)

  this.update = function() {
    if ( this.gameOver ) return;
    this.bg.update();
    this.base.update();
    this.pipe.update();
    this.bird.update();
    if (this.gameOver) {
      gameover = new Image();
      gameover.onload = function() {
        gameover.src = 'assets/gameover.png';
        this.context.drawImage(this.image, 48, 235);
      }
    }
  }

  this.listenMouse = function() {
    this.canvas.addEventListener('click', () => {
      this.bird.flap();
    })
  }.bind(this)

  this.draw = function() {
    this.bg.draw();
    this.pipe.draw();
    this.base.draw();
    this.bird.draw();
  }
}

var g = new game();
g.init();
