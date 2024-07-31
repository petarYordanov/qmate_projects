
class BasePage {


     async clickById(id) {
        const elem = await nonUi5.element.getById(id);
        await nonUi5.userInteraction.click(elem);
    }

    async typeById(id, text) {
        const elem = await  nonUi5.element.getById(id);
        await nonUi5.userInteraction.fill(elem, text);
    }


     async assertIsVissibleById(id){
        const elem =  await nonUi5.element.getById(id);
        await  nonUi5.assertion.expectToBeVisible(elem);
    }

    pressEnter(){
        common.userInteraction.pressEnter();
    }

    async getValueFromCss(css){
        const elem = await nonUi5.element.getByCss(css);
        const elemValue = await nonUi5.element.getValue(elem);
        return elemValue;
    }

}

module.exports = BasePage;