# mkchat
The Chat UI Article Generator.

It can generate articles such as below.
https://yoshikai.net/interview.html

![Takuto Yoshikai's Profile](https://github.com/TakutoYoshikai/chat-profile/blob/master/cover.png)

### Requirements
* macOS or Ubuntu
* npm 
* Node.js

### Usage
#### chat.txt format
`tSelf Introduction` -> title is "Self Introduction"

`mHello` -> You say Hello.

`yHey` -> Other person says Hey

`iimages/yuta.jpg` -> You post `"images/yuta.jpg"`

`jimages/takuto-meshi.png` -> Other person post `"images/takuto-meshi.png"`

`nimages/takuto-meshi.png` -> Your icon image `"images/takuto-meshi.png"`

`limages/yuta.jpg` -> Other person's icon image `"images/yuta.jpg"`

#### chat.txt example
```
nimages/takuto-meshi.png
limages/yuta.jpg
tSelf Introduction
mHello!
yHey!
iimages/yuta.jpg
jimages/takuto-meshi.png
```

#### Result of the Example

<img src="./result.png" width="300">


#### Install
```bash
npm install -g TakutoYoshikai/mkchat
```

#### Command
```bash
mkchat <CHAT.TXT FILE>

# It exports ./chat 
```

### LICENSE
MIT
