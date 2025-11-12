//写给嘉丽的话
const messages = [
  "小许同学今天也要开心呀!",
  "你笑起来真的是全世界最温柔的光~",
  "有点想你啦！呜呜呜～",
  "小许是最特别的人，没有之一！",
  "每个努力的你都值得被拥抱～",
  "无论什么时候，都希望你被温柔对待～",
  "记得多喝水、早点休息呀～",
  "世界因为有你变得可爱一点点～",
  "看到你就像阳光洒在心上一样暖！",
  "嘿嘿，小许在我心里是第一名噢！",
  "嘉丽同学要多喝水哦～",
  "lulu 要时刻保持微笑呀，嘿嘿！",
  "今天也要元气满满！",
  "小憩一下吧~",
  "不要一直玩电脑啦，眼睛要休息哦",
  "吃点甜甜的东西吧",
  "别一直猛攻啦，偶尔陪我跑一跑刀嘛～",
  "小嘉丽要记得吃一些水果哦～",
  "可爱在于你！",
  "你很棒哦",
  "嘉丽要天天开心哦～",
  "许同学要每天开开心心！！！",
  "许同学什么时候陪刘同学打游戏呢～",
  "希望你一直都有人爱",
  "你说没有人说过你很值得，我可以告诉你，你在我这里，很值得！",
  "永远有人会爱你！",
  "嘉丽同学一定是一个脾气非常好的女孩子～",
  "小嘉丽不是一个乱发脾气的女孩子哦！"
];


// 不知道许同学什么时候愿意做我女朋友呢？
setInterval(() => {
  createPopup();
}, 1000);

function createPopup() {
  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.innerText = messages[Math.floor(Math.random() * messages.length)];

  popup.style.left = Math.random() * 70 + 10 + "vw";
  popup.style.top = Math.random() * 60 + 20 + "vh";

  document.body.appendChild(popup);

  setTimeout(() => {
    popup.remove();
  }, 20000);
}
//我真的真的好喜欢你啊，许嘉丽！！！