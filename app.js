var traditionalColors = [
  ['嫩绿', '#a1d8b2'],
  ['月白', '#d6d6d9'],
  ['海天蓝', '#a4d8e2'],
  ['橄榄绿', '#5e6b3b'],
  ['桔梗蓝', '#6c8ebf'],
  ['葱青', '#bed3cb'],
  ['酡颜', '#f9a7b0'],
  ['橙皮', '#ff9f4f'],
  ['翠绿', '#00a497'],
  ['黄栌', '#e9b96e'],
  ['橙黄', '#f0c239'],
  ['紫苑', '#cb99c9'],
  ['雪青', '#c0b8b1'],
  ['苍黄', '#ecd19a'],
  ['石绿', '#7bcfa6'],
  ['砂色', '#dcb57c'],
  ['绀青', '#4c6cb3'],
  ['苍黑', '#a3a36f'],
  ['藤黄', '#f7c242'],
  ['紫檀', '#5b2e2f'],
  ['柳黄', '#c9dd41'],
  ['花青', '#6c9bd2'],
  ['鸟翎绿', '#00af90'],
  ['鹤顶红', '#d0648a'],
  ['松花色', '#bce672'],
  ['黄橙', '#ffae00'],
  ['橙红', '#fb4c1f'],
  ['沙色', '#dcb48a'],
  ['竹青', '#6b8d53'],
  ['琥珀', '#ca6924'],
  ['葡萄酒红', '#722f37'],
  ['草绿', '#9ed048'],
  ['翠色', '#00a497'],
  ['松绿', '#5fa052'],
  ['嫩黄', '#f3cf60'],
  ['深绿', '#00552e'],
  ['葱绿', '#a3d8b8'],
  ['银白', '#e6e6e6'],
  ['枯绿', '#e0eab1'],
  ['淡青', '#d3f4d1'],
  ['茶色', '#8c6450'],
  ['水色', '#88ada6'],
  ['橄榄色', '#8b8c4a'],
  ['玫瑰红', '#e52c6b'],
  ['灰色', '#808080'],
  ['桃红', '#f47983'],
  ['浅绿', '#bee7a5'],
  ['鲜绿', '#00e500'],
  ['淡紫', '#d3c6ea'],
  ['石青', '#5d7b8d'],
  ['浅灰', '#d9d6c3'],
  ['墨绿', '#4c4f56']
];

const btn = document.getElementById("btn");
const down = document.getElementById("down");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  const colorName = traditionalColors[randomNumber][0];
  const colorValue = traditionalColors[randomNumber][1];
  document.body.style.backgroundColor = colorValue;
  color.textContent = colorName + " (" + colorValue + ")";
});

down.addEventListener("click", function() {
  console.log("the down is run");
  const showbody = document.getElementById("showbody");
  showbody.style.display="none";

});

function getRandomNumber() {
  return Math.floor(Math.random() * traditionalColors.length);
}

// save image
