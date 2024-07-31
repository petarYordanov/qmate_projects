const BmiPage = require('../pom/BmiPage');


describe("BMI page tests", function () {

  const  bmiPage = new BmiPage();

    
    it("Step 01: BMI for Overweight", async function () {
      

        await common.navigation.navigateToUrl(util.browser.getBaseUrl());

         bmiPage
            .typeFeetValue("5")
            .typeInchesValue("3")
            .typePoundsValue("144")
            .clickCalcButton();

        const resultBmi =  await bmiPage.getBmiResult();

        common.assertion.expectTrue(resultBmi === 'Overweight');

      });


          
    it("Step 02: BMI for Obesity", async function () {
      

      await common.navigation.navigateToUrl(util.browser.getBaseUrl());

       bmiPage
          .typeFeetValue("5")
          .typeInchesValue("4")
          .typePoundsValue("150")
          .clickCalcButton();

      const resultBmi =  await bmiPage.getBmiResult();

      common.assertion.expectTrue(resultBmi === 'Obesity');

    });
});
