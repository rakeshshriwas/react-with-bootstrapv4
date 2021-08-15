const rewire = require("rewire")
const registerServiceWorker = rewire("./registerServiceWorker")
const registerValidSW = registerServiceWorker.__get__("registerValidSW")
// @ponicode
describe("registerValidSW", () => {
    test("0", () => {
        let callFunction = () => {
            registerValidSW("http://www.example.com/route/123?foo=bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            registerValidSW("www.google.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            registerValidSW("https://")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            registerValidSW("ponicode.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            registerValidSW("Www.GooGle.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            registerValidSW(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
