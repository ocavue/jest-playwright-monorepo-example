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
    transform: {
        // ".*\\.js(x)?$": "babel-jest",
        // ".*\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2|md)$": "jest-transform-stub",
    },
    displayName: { name: "my-subpackage-01", color: "blackBright" },
    transformIgnorePatterns: ["/node_modules/"],
    testMatch: ["<rootDir>/e2e/**/*.spec.(js|ts|jsx|tsx)"],
}
