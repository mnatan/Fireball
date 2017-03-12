import * as ex from "excalibur";

export class DictLoader extends ex.Loader {
    constructor(resources: {[id: string]: ex.ILoadable}) {
        super();

        for (let loadable in resources) {
            if (resources.hasOwnProperty(loadable)) {
                this.addResource(resources[loadable]);
            }
        }
    }

}
