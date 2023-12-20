###### DANZ ######
This project handles the list and update movies in loby.

### Install necessary packeges 
## Ubuntu platform

sudo apt-get update
sudo apt-get install git -y

## ----- Install NVM and node version 14.15.5 -----

touch ~/.bash_profile
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash
source ~/.bash_profile
nvm install v20.10.0
nvm use v20.10.0
nvm alias default 20.10.0
npm config set registry http://registry.npmjs.org/

## -------------------------------------------------

## -------- Creating a local mongodb database --------
Follow the steps in the link for setting up mongodb in local
https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/

## --------------------------------------------------------


Install packages
-- got to project directory and run 
    npm install
-- to start server do 
    npm start
-- to run test cases run 
    npm test
