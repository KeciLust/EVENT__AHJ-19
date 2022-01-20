/* eslint-disable no-unused-expressions */
export default class Create {
  constructor(numF) {
    this.numF = numF;
    this.field = document.querySelector('.field');
    this.check = 0;
    this.win = 0;
    this.lose = 0;
    this.timer;
  }

  create() {
    for (let i = 0; i < this.numF; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      this.field.insertAdjacentElement('beforeend', cell);
    }
  }

  moves() {
    const cell = Array.from(document.querySelectorAll('.cell'));
    let pos = 0;
    this.timer = setInterval(() => {
      const numCell = Math.floor(Math.random() * this.numF);
      if (numCell !== pos) {
        cell[numCell].classList.add('goblin');
        cell[pos].classList.remove('goblin');
        pos = numCell;
        this.check += 1;
      }
      this.game();
    }, 1000);
  }

  listner() {
    this.field.addEventListener('click', (e) => {
      if (e.target.classList.contains('goblin')) {
        this.win += 1;
        this.check -= 1;
      } else {
        this.lose += 1;
      }
    });
  }

  game() {
    if ((this.lose + this.check) >= 5) {
      clearInterval(this.timer);
      this.field.style.background = 'red';
    } if (this.win >= 5) {
      clearInterval(this.timer);
      this.field.style.background = 'green';
    }
  }
}
