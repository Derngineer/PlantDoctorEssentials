FROM python:3.10

ENV PYTHONUNBUFFERED 1 

RUN pip install --upgrade pip

WORKDIR /usr/src/app

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . /usr/src/app/

EXPOSE $PORT

# EXPOSE 8500

# EXPOSE 8501

COPY ./entrypoint.sh /

ENTRYPOINT ["sh", "/entrypoint.sh"]


