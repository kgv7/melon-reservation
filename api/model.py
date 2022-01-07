"""Define data tables"""

from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class User(db.Model):
    """Data model for a user."""

    __tablename__ = 'users'

    user_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(30), nullable=False)

    appointment = db.relationship('Appointment', back_populates='user')


    def __repr__(self):
        return f"<User user_id={self.user_id} username={self.username}>"


class Appointment(db.Model):
    """Data model for a user."""

    __tablename__ = 'appointments'

    appointment_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    date = db.Column(db.Date, nullable=False, default=datetime.date)
    start_time = db.Column(db.Time, nullable=False, default=datetime.time)
    end_time = db.Column(db.Time, nullable=False, default=datetime.time)
    user_id = db.Column(db.Integer, db.ForeignKey('users.user_id'))

    user = db.relationship('User', back_populates='appointment')


    def __repr__(self):
        return f"<Appointment appointment_id={self.appointment_id} date={self.date} time={self.start_time} to {self.end_time}>"


def connect_to_db(app):
    """Connect the database to our Flask app."""

    app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql:///melonreservations"
    app.config["SQLALCHEMY_ECHO"] = False
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    db.app = app
    db.init_app(app)
    print("Connected to db!")


if __name__ == "__main__":
    from flask import Flask

    app = Flask(__name__)
    connect_to_db(app)