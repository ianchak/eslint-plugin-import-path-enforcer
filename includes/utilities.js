const getModuleNameFromPath = function (path, modulesFolder) {
    // TODO: harden against package names that contain the modules folder name (maybe use regex?)
    const parsedModulesfolder = modulesFolder.replace('/', '\\');
    const relativeFromModulesFolderPath = path.split(parsedModulesfolder).pop();
    return relativeFromModulesFolderPath.split('\\')[1].replace('\\', '');
};

const isInModulesDirectory = function (currentFilePath, modulesFolder) {
    const parsedModulesfolder = modulesFolder.replace('/', '\\');
    return currentFilePath.includes(`\\${parsedModulesfolder}\\`);
};

const isRelativeImportPath = function (importPath) {
    return importPath.startsWith('./') || importPath.startsWith('../');
};

const getModuleNameFromAbsoluteImportPath = function (importPath, absoluteAlias) {
    let moduleName = importPath.replace(absoluteAlias, '').replace('/', '');
    // TODO: this ignores subdirectory references, check if needed
    if (moduleName.includes('/')) {
        moduleName = moduleName.split('/').shift();
    }

    return moduleName;
};

module.exports = { getModuleNameFromPath, isInModulesDirectory, isRelativeImportPath, getModuleNameFromAbsoluteImportPath };
