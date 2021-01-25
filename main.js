let human = {};

human.name = "tai";
human.age = 34;

human.getInfo = function () {
  return `名前は${human.name}、年齢は${human.age}歳です`;
};

console.log(human.getInfo());
