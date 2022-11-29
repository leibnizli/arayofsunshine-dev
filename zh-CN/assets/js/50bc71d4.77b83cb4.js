"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[406],{970:t=>{t.exports=JSON.parse('{"blogPosts":[{"id":"convert-emoji-character-to-unicode-number-in-javascript","metadata":{"permalink":"/zh-CN/blog/convert-emoji-character-to-unicode-number-in-javascript","source":"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2019-05-28-convert-emoji-character.mdx","title":"JavaScript\u8f6c\u6362emoji\u5b57\u7b26\u4e3aUnicode\u7f16\u7801","description":"String.prototype.codePointAt","date":"2019-05-28T00:00:00.000Z","formattedDate":"2019\u5e745\u670828\u65e5","tags":[{"label":"emoji","permalink":"/zh-CN/blog/tags/emoji"}],"readingTime":0.795,"hasTruncateMarker":true,"authors":[],"frontMatter":{"slug":"convert-emoji-character-to-unicode-number-in-javascript","title":"JavaScript\u8f6c\u6362emoji\u5b57\u7b26\u4e3aUnicode\u7f16\u7801","tags":["emoji"]}},"content":"## String.prototype.codePointAt\\n\\n```js\\n\'\u2603\u2605\u2672\'.codePointAt(0);\\n// output: \\"9731\\"\\n\'\u2603\u2605\u2672\'.codePointAt(1);\\n// output: \\"9733\\"\\n\'\u2603\u2605\u2672\'.codePointAt(2);\\n// output: \\"9842\\"\\n\\n\\"\ud83d\ude00\\".codePointAt(0);\\n// output: \\"128512\\"\\n\\"\ud83d\ude00\\".codePointAt(1);\\n// output: \\"56832\\"\\n\\"\ud83d\ude00\\".codePointAt(0).toString(16);\\n// output: \\"1f600\\"\\n\'\ud83d\ude00\'.length\\n// output: \\"2\\"\\n\\n\\"\ud83c\uddfa\ud83c\uddf8\\".codePointAt(0);\\n// output: \\"127482\\"\\n\\"\ud83c\uddfa\ud83c\uddf8\\".codePointAt(1);\\n// output: \\"56826\\"\\n\\"\ud83c\uddfa\ud83c\uddf8\\".codePointAt(2);\\n// output: \\"127480\\"\\n\\"\ud83c\uddfa\ud83c\uddf8\\".codePointAt(3);\\n// output: \\"56824\\"\\n\'\ud83c\uddfa\ud83c\uddf8\'.length\\n// output: \\"4\\"\\n```\\n\\n\x3c!--truncate--\x3e\\n\\n## String.fromCodePoint\\n\\n```js\\nString.fromCodePoint(9731, 9733, 9842, 0x2F804);\\n// output: \\"\u2603\u2605\u2672\u4f60\\"\\n\\nString.fromCodePoint(128512, 56832)\\n// output: \\"\ud83d\ude00\\\\uDE00\\"\\n\\nString.fromCodePoint(128512)\\n// output: \\"\ud83d\ude00\\"\\n\\nString.fromCodePoint(\\"0x\\"+\\"1f600\\");\\n// output: \\"\ud83d\ude00\\"\\n\\nString.fromCodePoint(127482,127480)\\n// output: \\"\ud83c\uddfa\ud83c\uddf8\\"\\n```\\n\\n## \u8f6c\u6362\u591a\u4e2aemoji\\n```js\\n[...\'\u2603\u2605\u2672\u4f60\ud83d\ude00\ud83c\uddfa\ud83c\uddf8\'].map((el)=>{return el.codePointAt(0);})\\n// output: [9731, 9733, 9842, 20320, 128512, 127482, 127480]\\n\\nString.fromCodePoint(...[9731, 9733, 9842, 20320, 128512, 127482, 127480])\\n// output: \\"\'\u2603\u2605\u2672\u4f60\ud83d\ude00\ud83c\uddfa\ud83c\uddf8\'\\"\\n```\\n```js\\n[...\'\u2603\u2605\u2672\u4f60\ud83d\ude00\ud83c\uddfa\ud83c\uddf8\'].map((el)=>{return `0x${el.codePointAt(0).toString(16)}`;})\\n// output: [\'0x2603\', \'0x2605\', \'0x2672\', \'0x4f60\', \'0x1f600\', \'0x1f1fa\', \'0x1f1f8\']\\n\\nString.fromCodePoint(...[\'0x2603\', \'0x2605\', \'0x2672\', \'0x4f60\', \'0x1f600\', \'0x1f1fa\', \'0x1f1f8\'])\\n// output: \'\u2603\u2605\u2672\u4f60\ud83d\ude00\ud83c\uddfa\ud83c\uddf8\'\\n```\\n\\n<a href=\\"https://gadgets.gotomorrow.dev/zh-CN/unicode\\">\u5728\u7ebf-Unicode\u7f16\u7801/Unicode\u89e3\u7801/Emoji\u7f16\u7801/Emoji\u89e3\u7801</a>"}]}')}}]);