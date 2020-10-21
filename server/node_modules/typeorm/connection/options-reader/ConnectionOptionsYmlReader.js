"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var js_yaml_1 = tslib_1.__importDefault(require("js-yaml"));
var PlatformTools_1 = require("../../platform/PlatformTools");
/**
 * Reads connection options defined in the yml file.
 */
var ConnectionOptionsYmlReader = /** @class */ (function () {
    function ConnectionOptionsYmlReader() {
    }
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    /**
     * Reads connection options from given yml file.
     */
    ConnectionOptionsYmlReader.prototype.read = function (path) {
        var contentsBuffer = PlatformTools_1.PlatformTools.readFileSync(path);
        var contents = contentsBuffer.toString();
        var config = js_yaml_1.default.safeLoad(contents);
        if (typeof config !== 'object') {
            return [];
        }
        return Object.keys(config).map(function (connectionName) {
            return Object.assign({ name: connectionName }, config[connectionName]);
        });
    };
    return ConnectionOptionsYmlReader;
}());
exports.ConnectionOptionsYmlReader = ConnectionOptionsYmlReader;

//# sourceMappingURL=ConnectionOptionsYmlReader.js.map
