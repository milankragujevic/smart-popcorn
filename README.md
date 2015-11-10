smart-popcorn
===================

[Popcorntime](https://github.com/popcorn-official/popcorn-app) just got smarter!

#Getting Started

- [How to Install on my TV](https://www.samsungdforum.com/Guide/art00013/index.html#packaging-applications-for-upload)
- [What year is my TV?](http://www.samsung.com/us/support/faq/FAQ00057975/76904/LN46B540P8FXZA)
- [Does my TV support this app?](http://developer.samsung.com/devices/tv-specs#)(This App uses 3.5 SDK)

## How to deploy smart-popcorn to your TV

- You will need [nodejs](http://nodejs.org/), [npm](http://blog.npmjs.org/post/85484771375/how-to-install-npm) and [grunt-cli](http://gruntjs.com/getting-started) installed on your computer
- run ``npm install``
- run ``grunt``
- then run ``grunt deploy``
- If you see this message: "Please go to http://xxx.xxx.xxx.xxx to test your popcorntime server." It means that it worked!
- Set your network IP in the TV (the same IP that you obtained above)
- Your TV is going to download your app
- In a new terminal, start the server: ``node server/start``
- Open your TV app