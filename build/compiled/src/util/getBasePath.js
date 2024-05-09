"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBasePath = void 0;
const getBasePath = () => {
    const resourceName = GetCurrentResourceName();
    const resourcePath = GetResourcePath(resourceName);
    return resourcePath.replace(/(\/|\\)(\/|\\)/g, '$1');
};
exports.getBasePath = getBasePath;
//# sourceMappingURL=getBasePath.js.map