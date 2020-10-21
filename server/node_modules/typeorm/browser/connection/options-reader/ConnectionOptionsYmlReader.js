import ymlParser from 'js-yaml';
import { PlatformTools } from "../../platform/PlatformTools";
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
        var contentsBuffer = PlatformTools.readFileSync(path);
        var contents = contentsBuffer.toString();
        var config = ymlParser.safeLoad(contents);
        if (typeof config !== 'object') {
            return [];
        }
        return Object.keys(config).map(function (connectionName) {
            return Object.assign({ name: connectionName }, config[connectionName]);
        });
    };
    return ConnectionOptionsYmlReader;
}());
export { ConnectionOptionsYmlReader };

//# sourceMappingURL=ConnectionOptionsYmlReader.js.map
