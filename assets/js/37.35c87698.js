(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{202:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"使用-python-语言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-python-语言","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用 Python 语言")]),t._v(" "),a("h2",{attrs:{id:"用法示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法示例","aria-hidden":"true"}},[t._v("#")]),t._v(" 用法示例")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" unittest\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" macaca "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" WebDriver\n\ndesired_caps "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'platformName'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Desktop'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v(" iOS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Android"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Desktop\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'browserName'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Chrome'")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v(" Chrome"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Electron\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path/to/app'")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v(" Only "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" mobile\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nserver_url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hostname'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'127.0.0.1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'port'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3456")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MacacaTest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("unittest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TestCase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    @"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("classmethod")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setUpClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        cls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("driver "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" WebDriver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("desired_caps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" server_url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        cls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("driver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    @"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("classmethod")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tearDownClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        cls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("driver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("quit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test_get_url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("driver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://www.google.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("assertEqual"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("driver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Google'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test_search_macaca")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("driver                  \\\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("element_by_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lst-ib"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \\\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("send_keys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"macaca"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("     \\\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("driver                  \\\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("element_by_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"btnK"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \\\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("click"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        html "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("driver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("source\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("assertTrue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'macaca'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__main__'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    unittest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"相关链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关链接","aria-hidden":"true"}},[t._v("#")]),t._v(" 相关链接")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"//macacajs.github.io/wd.py"}},[t._v("API 文档")])]),t._v(" "),a("li",[a("a",{attrs:{href:"//github.com/macaca-sample/sample-python"}},[t._v("示例")])]),t._v(" "),a("li",[a("a",{attrs:{href:"//github.com/macacajs/wd.py"}},[t._v("源代码")])])])])}],!1,null,null,null);s.default=e.exports}}]);