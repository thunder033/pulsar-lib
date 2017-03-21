/**
 * Created by Greg on 2/27/2017.
 */
'use strict';
// This might throw errors in webstorm when the typescript service is enabled and TS 2.2.1+ is installed
// it does not blow up 2.1.6 compiler
function Enum(o) {
    return o.reduce((res, key) => {
        res[key] = key;
        return res;
    }, Object.create(null));
}
exports.Enum = Enum;
//# sourceMappingURL=enum.js.map