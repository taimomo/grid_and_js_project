class BMI {
  constructor(height = 0, weight = 0) {
    this.height = height;
    this.weight = weight;
  }

  getBMI() {
    let bmi = this.weight / (this.height / 100) ** 2;
    bmi = bmi * 10;
    bmi = Math.round(bmi);
    bmi = bmi / 10;
    return bmi;
  }

  getAdvice() {
    let bmi = this.weight / (this.height / 100) ** 2;
    bmi = Math.round(bmi);
    let idealWeight = 22 * (this.height / 100) ** 2;

    idealWeight = Math.round(idealWeight);
    let adviceMessage = "理想体重です";
    if (bmi > 22) {
      adviceMessage = `太っています。体重${idealWeight}kgを目指しましょう`;
    } else {
      adviceMessage = `痩せています。体重${idealWeight}kgを目指しましょう`;
    }
    return adviceMessage;
  }
}
