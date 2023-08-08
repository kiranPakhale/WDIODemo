import { Then } from "@wdio/cucumber-framework";
import chai from "chai"

Then(/^Inventary page list should (.*)$/, async function (noOfProducts) {
    if(!noOfProducts) throw Error(`invalid number: ${noOfProducts}`)
    let eleArr = await $$(`.Inventory_item_name`)
    chai.expect(eleArr.length).to.equal(parseInt(noOfProducts))

    // console.log(`>> searchItem: ${noOfProducts}`);
    // let ele = await $(`[name=q]`)
    // await ele.setValue(noOfProducts)
    // await browser.keys("Enter")
})