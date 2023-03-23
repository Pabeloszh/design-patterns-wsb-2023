class Particle {
    constructor(color, sprite) {
      this.color = color;
      this.sprite = sprite;
    }
  
    move(coords, vector, speed) {
        // move particle to new coordinates based on vector and speed
    }
  
    draw(coords, canvas) {
        // draw particle on canvas at specified coordinates
    }
}
  
class MovingParticle {
    constructor(particle, coords, vector, speed) {
        this.particle = particle;
        this.coords = coords;
        this.vector = vector;
        this.speed = speed;
    }
  
    move() {
        this.particle.move(this.coords, this.vector, this.speed);
    }
  
    draw(canvas) {
        this.particle.draw(this.coords, canvas);
    }
}
  
  class Unit {
    constructor(coords, vector, speed) {
        this.coords = coords;
        this.vector = vector;
        this.speed = speed;
    }
  
    fireAt(target) {
        // create MovingParticle with appropriate particle, coords, vector and speed to represent fired shot
        const particle = new Particle("red", "bullet");
        const shot = new MovingParticle(particle, this.coords, this.vector, this.speed);
        // move shot towards target
        // ...
    }
}
  
class Game {
    constructor() {
      this.mps = [];
      this.particles = {};
    }
  
    addParticle(coords, vector, speed, color, sprite) {
        // create new particle or retrieve existing one with same color and sprite
        if (!this.particles[color + sprite]) {
            this.particles[color + sprite] = new Particle(color, sprite);
        }
        // create new moving particle with retrieved or created particle and specified coords, vector, and speed
        const movingParticle = new MovingParticle(this.particles[color + sprite], coords, vector, speed);
        // add new moving particle to game
        this.mps.push(movingParticle);
    }
  
    draw(canvas) {
        // draw all moving particles in game on specified canvas
        for (const mp of this.mps) {
            mp.draw(canvas);
        }
    }
}