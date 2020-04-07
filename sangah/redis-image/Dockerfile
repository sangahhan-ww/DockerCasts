# Use an existing docker image as a base
FROM alpine

# DL + Install a dependency
RUN apk add --update redis
RUN apk add --update gcc

# Instructions for starting
CMD ["redis-server"]