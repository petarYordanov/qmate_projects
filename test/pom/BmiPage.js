const BasePage = require("./BasePage");

class BmiPage extends BasePage {

    locators = {
        feetField : "feet",
        inchesField : "inches",
        poundsField : "pounds",
        calcButton: "calc",
        bmiValue: ".bmi_type"

    }

    typeFeetValue(value){
        super.typeById(this.locators.feetField, value);
        return this;
    }

    typeInchesValue(value){
        super.typeById(this.locators.inchesField, value);
        return this;
    }

    typePoundsValue(value){
        super.typeById(this.locators.poundsField, value);
        return this;
    }

    clickCalcButton(){
        super.clickById(this.locators.calcButton);
        return this;
    }

    getBmiResult(){
        return super.getValueFromCss(this.locators.bmiValue);
    }

}

module.exports = BmiPage;