module.exports.rules = {
    'same-package-import': require('./rules/same-package-import'),
    'external-package-import': require('./rules/external-package-import'),
};

module.exports.configs = {
    recommended: {
        rules: {
            'import-path-enforcer/same-package-import': [],
            'import-path-enforcer/external-package-import': [],
        },
    },
};
