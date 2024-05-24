# 2024-01-20

息抜きにJavaScriptで完全コンストラクタや値オブジェクト、変数の固定について考えてみる

## 利用方法

フォルダをVSCodeで開いてください。
test.htmlをLive Serverとかでブラウザに表示してください。
test.htmlで読み込みするファイルを指定して、
検証ツールでコンソールを開いてください。

node の tsc がグローバルでインストールされている前提でできています。
script.tsはターミナルから tsc でコンパイルしてください。

## ファイルを見る順番

script_prototype.js
⬇
script_class.js

同じところ、違うところを比較してみてください。
同じところあるよね？

変数書き換えてみよう

script_immutable.js
⬇
script.ts

TypeScriptになって何が変わったのか?

script_mutator.js

参考図書

https://www.amazon.co.jp/%E8%89%AF%E3%81%84%E3%82%B3%E3%83%BC%E3%83%89-%E6%82%AA%E3%81%84%E3%82%B3%E3%83%BC%E3%83%89%E3%81%A7%E5%AD%A6%E3%81%B6%E8%A8%AD%E8%A8%88%E5%85%A5%E9%96%80-%E2%80%95%E4%BF%9D%E5%AE%88%E3%81%97%E3%82%84%E3%81%99%E3%81%84-%E6%88%90%E9%95%B7%E3%81%97%E7%B6%9A%E3%81%91%E3%82%8B%E3%82%B3%E3%83%BC%E3%83%89%E3%81%AE%E6%9B%B8%E3%81%8D%E6%96%B9-%E4%BB%99%E5%A1%B2/dp/4297127830