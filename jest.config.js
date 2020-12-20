module.exports = {
    verbose: true,

    // Stop running tests after `n` failures
    bail: 1,


    // Default timeout of a test in milliseconds.
    testTimeout: 30000,

    projects: [
        "./packages/my-subpackage-01/jest.my-subpackage-01.config.js",
        "./packages/my-subpackage-02/jest.my-subpackage-02.config.js",
    ],
}
