const path = require('path');

const { getModuleNameFromPath, isInModulesDirectory, isRelativeImportPath } = require('../includes/utilities');

function testRelativeImportPath(currentFilePath, importPath, modulesFolder, absoluteAlias) {
    if (isRelativeImportPath(importPath) && isInModulesDirectory(currentFilePath, modulesFolder)) {
        const currentFileDir = path.parse(currentFilePath).dir;
        const importAbsolutePath = path.resolve(currentFileDir, importPath);

        const currentModuleName = getModuleNameFromPath(currentFilePath, modulesFolder);
        const importModuleName = getModuleNameFromPath(importAbsolutePath, modulesFolder);

        if (currentModuleName !== importModuleName) {
            return {
                error: `Please use absolute import statements when importing from other modules! 
            You are using a relative reference to import '${importModuleName}' components from '${currentModuleName}'!`,
                fixedImport: `${absoluteAlias}/${importModuleName}`,
            };
        }
    }
}

module.exports = testRelativeImportPath;
