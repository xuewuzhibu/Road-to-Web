(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{482:function(t,a,s){"use strict";s.r(a);var e=s(29),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("JavaScript的字符串就是用"),s("code",[t._v("''")]),t._v("或"),s("code",[t._v('""')]),t._v("括起来的字符表示。")]),t._v(" "),s("p",[t._v("如果"),s("code",[t._v("'")]),t._v("本身也是一个字符，那就可以用"),s("code",[t._v('""')]),t._v("括起来，比如"),s("code",[t._v("\"I'm OK")]),t._v('"包含的字符是'),s("code",[t._v("I")]),t._v("，"),s("code",[t._v("'")]),t._v("，"),s("code",[t._v("m")]),t._v("，空格，"),s("code",[t._v("O")]),t._v("，"),s("code",[t._v("K")]),t._v("这6个字符。")]),t._v(" "),s("p",[t._v("如果字符串内部既包含"),s("code",[t._v("'")]),t._v("又包含"),s("code",[t._v('"')]),t._v("怎么办呢？可以用转义字符"),s("code",[t._v("\\")]),t._v("来标识，比如：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("'I\\'m \\\"OK\\\"!';\n")])])]),s("p",[t._v("表示的字符串内容是："),s("code",[t._v('I\'m "OK"!')])]),t._v(" "),s("p",[t._v("转义字符"),s("code",[t._v("\\")]),t._v("可以转义很多字符，比如"),s("code",[t._v("\\n")]),t._v("表示换行，"),s("code",[t._v("\\t")]),t._v("表示制表符，字符"),s("code",[t._v("\\")]),t._v("本身也要转义，所以"),s("code",[t._v("\\\\")]),t._v("表示的字符就是"),s("code",[t._v("\\")]),t._v("。")]),t._v(" "),s("p",[t._v("ASCII字符可以以"),s("code",[t._v("\\x##")]),t._v("形式的十六进制表示，例如：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("'\\x41'; // 完全等同于'A'\n")])])]),s("p",[t._v("还可以用"),s("code",[t._v("\\u####")]),t._v("表示一个Unicode字符：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("'\\u4f60\\u597d'; // 完全等同于'你好'\n")])])]),s("h2",{attrs:{id:"多行字符串"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多行字符串"}},[t._v("#")]),t._v(" 多行字符串")]),t._v(" "),s("p",[t._v("由于多行字符串用"),s("code",[t._v("\\n")]),t._v("写起来比较费事，所以ES6标准新增了一种多行字符串的表示方法，用反引号"),s("code",[t._v("`...`")]),t._v("表示：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("`这是一个\n多行\n字符串`;\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("反引号在键盘ESC键的下方，数字键1的左边")])]),t._v(" "),s("pre",{staticStyle:{"font-size":"12px","line-height":"12px"}},[s("div",{staticClass:"language-ascii",staticStyle:{"font-family":"'Courier New', Consolas, monospace"}},[t._v("┌─────┐ ┌─────┬─────┬─────┬─────┐\n│ ESC │ │ F1  │ F2  │ F3  │ F4  │\n│     │ │     │     │     │     │\n└─────┘ └─────┴─────┴─────┴─────┘\n┌─────┬─────┬─────┬─────┬─────┐\n│  ~  │  !  │  @  │  #  │  $  │\n│  `  │  1  │  2  │  3  │  4  │\n├─────┴──┬──┴──┬──┴──┬──┴──┬──┘\n│        │     │     │     │\n│  tab   │  Q  │  W  │  E  │\n├────────┴──┬──┴──┬──┴──┬──┘\n│           │     │     │\n│ caps lock │  A  │  S  │\n└───────────┴─────┴─────┘\n")])]),t._v(" "),s("p",[t._v("练习：测试你的浏览器是否支持ES6标准，如果不支持，请把多行字符串用"),s("code",[t._v("\\n")]),t._v("重新表示出来：")]),t._v(" "),s("div",{staticClass:"js-demo"},[s("div",{staticClass:"demo-title"},[s("span",[t._v("如果浏览器不支持ES6，将报SyntaxError错误:")])]),t._v(" "),s("textarea",{staticClass:"textarea",attrs:{id:"textarea1",maxlength:"900"}},[t._v("console.log(`多行\n字符串\n测试`);\n")]),t._v(" "),s("br"),t._v(" "),s("button",{attrs:{id:"run",onclick:"consoleRunCode(1)"}},[t._v("运行")]),t._v(" "),s("div",{attrs:{id:"log1"}})]),t._v(" "),s("h2",{attrs:{id:"模板字符串"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模板字符串"}},[t._v("#")]),t._v(" 模板字符串")]),t._v(" "),s("p",[t._v("要把多个字符串连接起来，可以用"),s("code",[t._v("+")]),t._v("号连接：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'小明'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" age "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'17'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" message "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'你好，我是'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'，我今年'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" age "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'岁了！'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("如果有很多变量需要连接，用"),s("code",[t._v("+")]),t._v("号就比较麻烦。ES6新增了一种模板字符串，表示方法和上面的多行字符串一样，但是它会自动替换模板字符串中的变量：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'小明'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" age "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" message "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("你好，我是")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("，我今年")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("age"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("岁了！")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("练习：测试你的浏览器是否支持ES6模板字符串，如果不支持，请把模板字符串改为"),s("code",[t._v("+")]),t._v("连接的普通字符串：")]),t._v(" "),s("div",{staticClass:"js-demo"},[s("div",{staticClass:"demo-title"},[s("span",[t._v("'use strict';")]),t._v(" "),s("span",[t._v("如果浏览器支付模板字符串，将会替换字符串内部的变量：")]),t._v(" "),s("span",[t._v("var name = '小明';")]),t._v(" "),s("span",[t._v("var age = 20;")])]),t._v(" "),s("textarea",{staticClass:"textarea",attrs:{id:"textarea2",maxlength:"900"}},[t._v("var name = '小明';\nvar age = 20;\nconsole.log(`你好, 我是${name}, 我今年${age}岁了!`);\n")]),t._v(" "),s("br"),t._v(" "),s("button",{attrs:{id:"run",onclick:"consoleRunCode(2)"}},[t._v("运行")]),t._v(" "),s("div",{attrs:{id:"log2"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);