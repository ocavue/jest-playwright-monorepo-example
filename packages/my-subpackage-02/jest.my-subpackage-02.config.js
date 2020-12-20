module.exports = {
    preset: "jest-playwright-preset",
    testEnvironmentOptions: {
        "jest-playwright": {
            launchOptions: {
                executablePath: process.env.PLAYWRIGHT_CHROME_EXECUTABLE_PATH,
                headless: true,
            },
            // jest-playwright ignores the following `serverOptions`.
            serverOptions: {

                command: `yarn run dev`,
                // command: `yarn workspace my-subpackage-01 dev`, // not sure which command is correct for a sub-package.
                launchTimeout: 60 * 1000,
                debug: true,
                port: 3001,
                usedPortAction: "error",
            },
        },
    },

    verbose: true,
    transform: {},
    displayName: { name: "my-subpackage-01", color: "blackBright" },
    transformIgnorePatterns: ["/node_modules/"],
    testMatch: ["<rootDir>/e2e/**/*.spec.(js|ts|jsx|tsx)"],
}
