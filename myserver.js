var express = require("express");
var app = express();
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.get("/", function (req, res) {
  res.send("Test message!");
});

app.get("/about", function (req, res) {
  let aboutdata = {
    "title": "关于我",
    "callme": "联系我",
    "desc": [
      "一个正在摸爬滚打、努力学习WEB前端的小白程序猿",
      "西南科技大学17级学生",
      "本科学的是物联网工程，一直向往学习编程方面相关的内容",
      "大学算是虚度了两年光阴，悔不当初，于是下决心成为一名前端工程师"
    ],
    "like": [
      "方向：WEB前端，移动端",
      "爱好：吃饭睡觉打游戏",
      "目标： WEB前端工程师"
    ],
    "call": [
      {
        "name": "Email",
        "herf": "  790041427@qq.com"
      },
      {
        "name": "Gitee",
        "herf": " https://gitee.com/SeaHaiWorld"
      },
      {
        "name": "Github",
        "herf": " https://github.com/SeaHaiWorld"
      },
      {
        "name": "QQ",
        "herf": " 790041427"
      }
    ]
  };
  res.json(aboutdata);
});

app.get("/Blog", function (req, res) {
  //添加的代码
  var intro=[];
  var arrreg =
    ["在React项目里，父子组件传值是比较常见的，今天研究了一下react的父子组件传值，父组件向子组件传值，父通过初始state，子组件通过this.props进行接收就可以了；子组件向父组件传值需要绑定一个事件，然后事件是父组件传递过来的this.props.event来进行值的更替，话不多说",
      "在一张页面中，我们该如何去实现页面跳转呢? Router为我们提供了页面跳转渲染的方法，React应用会根据链接地址去决定要渲染的内容链接地址。不再是直接跳转，而是去告诉React，我需要怎么样的内容，让React条件渲染"]
  var reg = /.{70}/g;
  for (var i = 0; i < arrreg.length; i++) {
    intro.push(arrreg[i].match(reg));
  }
  let blogdata = {
    Blog: [
      {
        title: "这是一个测试",
        date: "2019-8-1",
        label: ["标签", "、标签"],
        intro: "My dear man, you are welcome to stay",
        article: "/Blog"
      },
      {
        title: "React学习——使用React进行父子组件传值",
        date: "2019-8-6",
        label: ["前端", "、React"],
        intro: intro[0],
        article: "https://gitee.com/SeaHaiWorld/codes/puf1lvxki83rqtsdbjh6541"
      },
      {
        title: "React学习——Router路由的使用和页面跳转",
        date: "2019-8-7",
        label: ["前端", "、React"],
        intro: intro[1],
        article: "https://gitee.com/SeaHaiWorld/codes/dx2vbl4psjhcf60mou97590"
      },
      {
        title: "这是来自火星的你",
        date: "0000-00-00",
        label: ["标签", "、标签"],
        intro: "这是来自火星的你",
        article: "/Blog"
      },
      {
        title: "React学习——使用React进行父子组件传值",
        date: "2019-8-8",
        label: ["前端", "、React"],
        intro: intro[0],
        article: "https://gitee.com/SeaHaiWorld/codes/puf1lvxki83rqtsdbjh6541"
      },
      {
        title: "React学习——Router路由的使用和页面跳转",
        date: "2019-8-9",
        label: ["前端", "、React"],
        intro: intro[1],
        article: "https://gitee.com/SeaHaiWorld/codes/dx2vbl4psjhcf60mou97590"
      },
      {
        title: "React学习——使用React进行父子组件传值",
        date: "2019-8-10",
        label: ["前端", "、React"],
        intro: intro[0],
        article: "https://gitee.com/SeaHaiWorld/codes/puf1lvxki83rqtsdbjh6541"
      },
      {
        title: "React学习——Router路由的使用和页面跳转",
        date: "2019-8-11",
        label: ["前端", "、React"],
        intro: intro[1],
        article: "https://gitee.com/SeaHaiWorld/codes/dx2vbl4psjhcf60mou97590"
      },
      {
        title: "React学习——使用React进行父子组件传值",
        date: "2019-8-1",
        label: ["前端", "、React"],
        intro: intro[0],
        article: "https://gitee.com/SeaHaiWorld/codes/puf1lvxki83rqtsdbjh6541"
      },
      {
        title: "React学习——Router路由的使用和页面跳转",
        date: "2019-8-2",
        label: ["前端", "、React"],
        intro: intro[1],
        article: "https://gitee.com/SeaHaiWorld/codes/dx2vbl4psjhcf60mou97590"
      }
    ]
  };
  res.json(blogdata);
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("http://", host, port);
});
