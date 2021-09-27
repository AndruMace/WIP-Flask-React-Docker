FROM python:3.9.7
WORKDIR /app
ENV FLASK_APP=server.app
ENV FLASK_RUN_HOST=0.0.0.0
ENV SECRET_KEY=supersecretkey
COPY requirements.txt requirements.txt
RUN pip install --upgrade pip && pip install -r requirements.txt
EXPOSE 5000
COPY . .
CMD ["flask", "run"]