module.exports = {
    // serverOptions must be placed in root directory's jest-playwright.config.js: https://github.com/playwright-community/jest-playwright/blob/v1.4.2/src/global.ts#L29
    serverOptions: {
        command: `yarn workspace my-subpackage-01 dev`,
        launchTimeout: 60 * 1000,
        debug: true,
        port: 3001,
        usedPortAction: "error",
    },
}
