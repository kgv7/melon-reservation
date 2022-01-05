"""Seeds the database with users and appointment times."""

import os
from random import choice, randint
from datetime import datetime
import crud, model, server
from faker import Faker

os.system('dropdb melonreservations')
os.system('createdb melonreservations')

model.connect_to_db(server.app)
model.db.create_all()

fake = Faker()

# create users
user_db = []
for i in range(10):
    email = fake.email()
    new_user = crud.create_user(email)
    user_db.append(new_user)

# create appointments