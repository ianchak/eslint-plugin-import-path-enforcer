const { getModuleNameFromPath, isInModulesDirectory, getModuleNameFromAbsoluteImportPath } = require('../includes/utilities');

function testAbsoluteImportPath(currentFilePath, importPath, modulesFolder, absoluteAlias) {
    if (importPath.startsWith(absoluteAlias) && isInModulesDirectory(currentFilePath, modulesFolder)) {
        const currentModuleName = getModuleNameFromPath(currentFilePath, modulesFolder);
        const importModuleName = getModuleNameFromAbsoluteImportPath(importPath, absoluteAlias);

        if (currentModuleName === importModuleName) {
            return {
                error: `Please use relative import statements when importing from the same module! 
            You are using an absolute reference to import from '${currentModuleName}'!`
            };
        }
    }
}

module.exports = testAbsoluteImportPath;
