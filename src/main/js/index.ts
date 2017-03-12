import "file-loader?name=[name].[ext]!./index.html";
import {Game} from "./game/Game";

let game = new Game();
game.bootstrap();