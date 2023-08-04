//import { Given, When, Then} from "@cucumber/cucumber";
import { Given, Then, When } from "@wdio/cucumber-framework";
import chai from "chai"

Given (/^Google page is opend$/, async function(){
    await browser.url("https://www.google.com/")
    await browser.pause(7000)
    console.log('After opening the browser');
    })

When(/^Search with (.*)$/, async function (searchItem) {
    console.log(`>> searchItem: ${searchItem}`);
    let ele = await $(`[name=q]`)
    await ele.setValue(searchItem)
    await browser.keys("Enter")
})

Then(/^Click on the first search result$/, async function () {
    let ele = await $(`<h3>`)
    ele.click()
})

Then(/^URL should  match (.*)$/, async function (ExpectedURL) {
    console.log(`>> ExpectedURL: ${ExpectedURL}`);
    let url = await browser.getUrl()
    chai.expect(url).to.equal(ExpectedURL)
})

