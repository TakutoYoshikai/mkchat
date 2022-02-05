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

<img src="./result.png" width="500">


#### Install
```bash
npm install -g TakutoYoshikai/mkchat
```

#### Command
```bash
mkchat <CHAT.TXT FILE>

# It exports ./chat 
```

### Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

### LICENSE
MIT
