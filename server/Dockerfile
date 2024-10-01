FROM python:3.12.2

WORKDIR /usr/src/app

ENV PROD True
# ENV FRONTACCES 
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apk update && apk upgrade
RUN apk add git
RUN pip install --upgrade pip

RUN git clone https://github.com/remix2021687/Web-Shoppe && cd Web-Shoppe/ && rm -R client && rm -R database && cd server/

EXPOSE 8000