const testAbsoluteImportPath = require('../scripts/testAbsoluteImportPath');
const { DEFAULT_PACKAGES_FOLDER, DEFAULT_ABSOLUTE_ALIAS } = require('../includes/constants');

module.exports = {
    meta: {},
    create: context => {
        const packagesFolder = context.options[0] || DEFAULT_PACKAGES_FOLDER;
        const absoluteAlias = context.options[1] || DEFAULT_ABSOLUTE_ALIAS;

        return {
            ImportDeclaration: node => {
                const filename = context.getPhysicalFilename ? context.getPhysicalFilename() : context.getFilename();

                const testResult = testAbsoluteImportPath(filename, node.source.value, packagesFolder, absoluteAlias);

                if (testResult) {
                    context.report(node, testResult.error);
                }
            },
        };
    },
};
