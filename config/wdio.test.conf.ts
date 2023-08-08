import { config as baseConfig } from "../wdio.conf";
export const config = Object.assign(baseConfig, {
    environment: "Test",
    SauceDemoUrl: "https://www.saucedemo.com"

})