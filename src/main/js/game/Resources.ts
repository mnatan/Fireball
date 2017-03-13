import * as ex from "excalibur";
import {DictLoader} from "../utils/DictLoader";

export class Resources {
    static resources = {
        wall: new ex.Texture("./game_resources/textures/wall.png"),
        explosion: new ex.Texture("./game_resources/textures/explosion_sprite.png"),
        mage: new ex.Texture("./game_resources/textures/mage_sprite.png"),

        level1: new ex.Resource<string>("./game_resources/levels/1.txt", "text/plain"),
    };

    static load(): ex.Loader {
        return new DictLoader(Resources.resources)
    }
}
Resources.resources.level1.processData = (data: string) => {return data};
