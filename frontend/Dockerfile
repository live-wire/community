# Trying Node setup

FROM node:7.7.2-alpine
# The enviroment variable ensures that the python output is set straight
# to the terminal with out buffering it first
# create root directory for our project in the container
RUN mkdir /frontend

# Set the working directory to /frontend
WORKDIR /frontend

# Copy the current directory contents into the container at /frontend
ADD . /frontend/

# Install any needed packages specified in package.json
RUN npm install --quiet

EXPOSE 8080

