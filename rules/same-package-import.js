const testRelativeImportPath = require('../scripts/testRelativeImportPath');
const { DEFAULT_PACKAGES_FOLDER, DEFAULT_ABSOLUTE_ALIAS } = require('../includes/constants');

module.exports = {
    meta: {
      fixable: 'code'
    },
    create: context => {
        const packagesFolder = context.options[0] || DEFAULT_PACKAGES_FOLDER;
        const absoluteAlias = context.options[1] || DEFAULT_ABSOLUTE_ALIAS;

        return {
            ImportDeclaration: node => {
                const filename = context.getPhysicalFilename ? context.getPhysicalFilename() : context.getFilename();

                const testResult = testRelativeImportPath(filename, node.source.value, packagesFolder, absoluteAlias);

                if (testResult) {
                    context.report({
                        node,
                        message: testResult.error,
                        fix: fixer => {
                            return fixer.replaceText(node.source, `'${testResult.fixedImport}'`);
                        },
                    });
                }
            },
        };
    },
};
