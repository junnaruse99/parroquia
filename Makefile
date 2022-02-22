run-front:
	cd front; \
	npm start

SHELL := /bin/bash

run-back:
	cd back; \
	source .venv/bin/activate; \
	pip3 install -r requirements.txt; \
	python3 manage.py makemigrations; \
	python3 manage.py migrate; \
	python3 manage.py runserver;