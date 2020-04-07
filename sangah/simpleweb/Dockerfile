FROM node:alpine

# after this line, all of the work will happen in this directory
WORKDIR /usr/app 

# everything from cwd in local to cwd in the image
COPY ./package.json ./  
RUN npm install

# everything above this will be cached becase it'll be the same unless you install a new package
COPY ./ ./

CMD ["npm", "start"]