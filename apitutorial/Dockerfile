FROM python:3.10

ENV PYTHONUNBUFFERED 1  # Use a colon instead of a period

WORKDIR /usr/src/app

COPY requirements.txt .

RUN pip install --upgrade  -r requirements.txt

COPY . /usr/src/app/

EXPOSE 8000
