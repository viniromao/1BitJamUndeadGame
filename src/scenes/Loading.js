export default class LoadingScene extends Phaser.Scene {
    constructor() {
        super({ key: 'LoadingScene' });
    }

    init() {
        const centerX = this.cameras.main.centerX;
        const centerY = this.cameras.main.centerY;
        let dots = 0;
        const baseText = 'Loading';
        const loadingText = this.add.text(centerX - 100, centerY - 50, baseText, { fontFamily: 'custom', fontSize: '50px' });

        this.time.addEvent({
            delay: 500, // every 500 milliseconds
            callback: () => {
                dots = (dots + 1) % 4; // Cycle through 0, 1, 2, and 3 dots
                const text = baseText + '.'.repeat(dots);
                loadingText.setText(text); // The text configuration remains the same, including the font family
            },
            callbackScope: this,
            loop: true
        });
    }

    preload() {
        this.load.spritesheet('progress_bar', 'assets/ui/progress_bar.png', { frameWidth: 32, frameHeight: 1000 });
        this.load.spritesheet('monster_sprites', 'assets/sprites/monstersSpriteSheet.png', { frameWidth: 32, frameHeight: 32 });
        this.load.spritesheet('background', 'assets/sprites/backgroundSpriteSheet.png', { frameWidth: 32, frameHeight: 32 });
        this.load.spritesheet('bigMonster', 'assets/sprites/monstersSpriteSheet.png', { frameWidth: 32, frameHeight: 64 });
        this.load.spritesheet('goodGuys', 'assets/sprites/goodGuysSprites.png', { frameWidth: 32, frameHeight: 32 });
        this.load.spritesheet('skeleton', 'assets/sprites/skeleton.png', { frameWidth: 16, frameHeight: 16 });
        this.load.spritesheet('player', 'assets/sprites/slime.png', { frameWidth: 16, frameHeight: 16 });
        this.load.audio('startSound', 'assets/music/startScreen.mp3');
        this.load.audio('themeSound', 'assets/music/mistOfMiseryV2.mp3');
        this.load.audio('themeSound2', 'assets/music/mistOfMiseryV4.mp3');
        this.load.audio('titleScreenSound', 'assets/music/titleScreen.mp3');
        this.load.audio('gameOver', 'assets/music/gameOverTheme.mp3');
        this.load.audio('death', 'assets/sfx/death2.mp3');
        this.load.audio('monsterDeath', 'assets/sfx/death.wav');
        this.load.audio('attackHuman', 'assets/sfx/attackHuman.mp3');
        this.load.spritesheet('button', 'assets/ui/start_button.png', { frameWidth: 192, frameHeight: 96 });
    }

    update() {
        // this.scene.start('StartScene');
    }
}

// ... rest of the code ...
