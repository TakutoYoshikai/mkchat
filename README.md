# chat-profile
The Chat UI Article Generator.

It can generate articles such as below.
https://yoshikai.net/interview.html

![Takuto Yoshikai's Profile](https://github.com/TakutoYoshikai/chat-profile/blob/master/cover.png)


### Usage
#### Auto generate html from chat.txt
`tSelf Introduction` -> title is "Self Introduction"

`mHello` -> You say Hello.

`yHey` -> Other person says Hey

`iimages/yuta.jpg` -> You post images/yuta.jpg

`jimages/takuto-meshi.png` -> Other person post images/takuto-meshi.png

**Example**
```
tSelf Introduction
mHello!
yHey!
iimages/yuta.jpg
jimages/takuto-meshi.png
```

#### htmlタグ書き出し
1. export.jsを編集して、myIconに自分側のアイコンのパス、yourIconに相手側のアイコンのパスを設定する。

2. chat.csvを編集して、以下の記法に従って表示させるメッセージを追加する

3. node.jsでexport.jsを実行
```
node export.js
```
4. コピーしてindex.htmlに貼り付け

5. index.jsの読み込みタグを削除

### LICENSE
MIT
