import "phaser";
import BootScene from "./scenes/BootScene";
import GameScene from "./scenes/GameScene";
import TitleScene from "./scenes/TitleScene";

const config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.AUTO,
    parent: "content",
    pixelArt: true,
    roundPixels: true,
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 600 },
            debug: false
        }
    },
    scale: {
        mode: Phaser.DOM.FILL,
        width: 800,
        height: 600,
        min: {
            width: 800,
            height: 600
        },
        max: {
            width: 1600,
            height: 1200
        }
    },
    scene: [BootScene, TitleScene, GameScene]
};

const game = new Phaser.Game(config);
