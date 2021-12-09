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

**Result of the Example**

<img src="./result.png" width="300">

#### Export HTML tags
1. Change myIcon and yourIcon in export.js

2. Rewrite chat.txt

3. `node export.js`

4. Paste html tags to index.html

5. Comment out this line in index.js
```javascript
getChatTexts().then(function(text) {
  //document.getElementById("chat").innerHTML = chat(csvToChat(text))
})
```

### LICENSE
MIT
