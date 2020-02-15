new Vue({
    el: '#app',
    data: {
        monsterHealth: 100,
        pleayerHealth: 100,
        isGameRunning: false
    },
    methods: {
        startGame: function () {
            this.isGameRunning = true;
            this.monsterHealth = 100;
            this.pleayerHealth = 100;
        },
        attack: function () {
            this.monsterHealth -= this.calculateDamage(10, 3);

            if (this.checkWin()) {
                return;
            }

            this.pleayerHealth -= this.calculateDamage(12, 5);

            this.checkWin();
        },
        specialAttack: function () {

        },
        heal: function () {

        },
        giveUp: function () {

        },
        calculateDamage: function (max, min) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function () {
            if (this.monsterHealth <= 0) {
                if (confirm('You Won! New Game?')) {
                    this.startGame();
                } else {
                    this.isGameRunning = false;
                }
                return true;
            } else if (this.pleayerHealth <= 0) {
                if (confirm('You Lost! New Game?')) {
                    this.startGame();
                } else {
                    this.isGameRunning = false;
                }
                return true;
            }
            return false;
        }
    },
});