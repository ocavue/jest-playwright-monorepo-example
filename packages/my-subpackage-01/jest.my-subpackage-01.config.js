module.exports = {
    preset: "jest-playwright-preset",
    testEnvironmentOptions: {
        "jest-playwright": {
            launchOptions: {
                executablePath: process.env.PLAYWRIGHT_CHROME_EXECUTABLE_PATH,
                headless: true,
            },
        },
    },

    verbose: true,
    transform: {},
    displayName: { name: "my-subpackage-01", color: "blackBright" },
    transformIgnorePatterns: ["/node_modules/"],
    testMatch: ["<rootDir>/e2e/**/*.spec.(js|ts|jsx|tsx)"],
}
