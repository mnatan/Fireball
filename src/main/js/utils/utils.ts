export function getAction(actions: {[id: string]: Function},
                          key: string): Function {
    if (key in actions) {
        return actions[key]
    } else {
        return () => {}; // no action
    }
}