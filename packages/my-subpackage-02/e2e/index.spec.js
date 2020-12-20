describe("Settings", () => {
    beforeAll(async () => {
        await page.goto("http://localhost:3002")
    })

    test("header", async () => {
        const browser = await page.$eval("h1", (el) => el.innerHTML)
        expect(browser).toContain("Welcome")
    })
})
