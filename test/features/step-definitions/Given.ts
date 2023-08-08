import { Given } from "@wdio/cucumber-framework";
import chai from "chai"

Given (/^Login to inventary web app$/, async function(){
    //@ts-ignore
    await browser.url(browser.config.SauceDemoUrl)
    await browser.setTimeout({implicit:15000, pageLoad:10000})
   // await browser.maximizeWindow()

   await $(`#user-name`).setValue(process.env.Test_STD_Username!)
   await $(`#password`).setValue(process.env.Test_STD_Password!)
   await $(`#login-button`).click()
    })