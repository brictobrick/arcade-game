// Enemies our player must avoid
class Enemy {
  constructor(x,y,s) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.s = s;
  }

  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
  update(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.s + dt;
  }

  // Draw the enemy on the screen, required method for game
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player {
  constructor(x,y) {
    this.sprite = 'images/char-cat-girl.png';
    this.x = x;
    this.y = y;
  }

  update(dt) {

  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  handleInput(key) {
    if(key == 'up' && this.y > 9) {
      this.y -= 20;
    } else if (key == 'right' && this.x < 400) {
      this.x += 20;
    } else if (key == 'down' && this.y < 420) {
      this.y += 20;
    } else if (key == 'left' && this.x > 10) {
      this.x -= 20;
    }
  }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
const enemy1 = new Enemy(100,1,1);
const enemy2 = new Enemy(-150,50,2);
const enemy3 = new Enemy(-75,50,2.5);
const enemy4 = new Enemy(10,150,2);
const enemy5 = new Enemy(-250,225,4.5);
const enemy6 = new Enemy(-250,225,1);
const enemy7 = new Enemy(50,300,2);
const enemy8 = new Enemy(-350,300,3);
let allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7, enemy8];

// Return Enemies' position to enemy.x = -150
function returnPosition() {
  setInterval(function() {
    for (enemy of allEnemies) {
      if (enemy.x >= 505) {
        enemy.x = -150
      }
    }
  }, 1000);
}

returnPosition();


// Place the player object in a variable called player
const player = new Player(200,430);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keydown', function(e) {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

// checkCollisions
document.addEventListener('keydown', function(e) {
  allEnemies.forEach(function(enemy) {
    let absX = Math.abs(enemy.x - player.x);
    let absY = Math.abs(enemy.y - player.y);
    if (absX < 40 && absY < 40) {
      console.log('Collision!');
    }
  });
});
