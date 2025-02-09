# streamerbot-Pulsoid Heart monitoring
Side project for [Streamer.bot](https://streamer.bot) to log my chat to mysql using Nodejs and Streamerbots Websockets this is semi hacky as I do not have docker or any scripts setup to make it easier yet.

## Use at your own risk
As I consider this code still as a 0.0.2 alpha code and as such things may change and break on you while I am working on adding new features to the code or fixing bugs. hoepfully someday I will have it 100% for my use case with a search and anylatics setup like I am wanting

## Getting started

1. Install [Streamer.bot](https://streamer.bot), and connect it to Twitch.
2. Turn on the Websocket Server:
   ![image](https://github.com/user-attachments/assets/525b2405-ff56-4bdb-a45b-3936b95f7b4f)
3. Install Nodejs 22.x or newer (tested on 22 and 23)
4. clone repository to a directory to run
5. copy env-example to .env and update parameters to your infromation for streamerbot and database info
6. run with node index.js from console.





### Configs

Here is the parameters, defaults and what they are for

| Config  | default value | description | notes |
| ------------- | ------------- | ------------- | ------------- |
| streamerbotHost  | 127.0.0.1  | IP to use to connect to streamerbot   | Can be left as default if on the same computer   |
| streamerbotPort | 8080  | Port to use to connect ot streamerbot  | can be left default if you didnt need to change it in setup  |
| streamerbotPassword | NULL  | Password  | Not currently used in code  |
| Debug | false  | Content  | debug more enabled  | Not used currently |


to set the server host for the overlay you can do ```http://localhost/heart.html?ws=ws://your-websocket-server``` this is for if you have nodejs on a seperate system.