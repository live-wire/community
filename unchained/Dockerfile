# The first instruction is what image we want to base our container on
# We Use an official Python runtime as a parent image
FROM python:3.6

# The enviroment variable ensures that the python output is set straight
# to the terminal with out buffering it first
ENV PYTHONUNBUFFERED 1
ENV HOME /home/dhruv
# create root directory for our project in the container
RUN mkdir /unchained

# Set the working directory to /unchained
WORKDIR /unchained

# Copy the current directory contents into the container at /unchained
ADD . /unchained/

# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt

