"""CRUD operations"""

from model import db, connect_to_db, User, Appointment


def create_user(username):
    """Creates a new user."""

    user = User(username=username)

    db.session.add(user)
    db.session.commit()

    return user

def create_appointment(date, start_time, end_time, user_id):
    """Creates an appointment."""
    appointment = Appointment(date=date, start_time=start_time, end_time=end_time, user_id=user_id)

    db.session.add(appointment)
    db.session.commit()

    return appointment

def get_appointment_by_user(user_id):
    """Gets list of appointments by user to show on scheduled appointment page"""

    appointment_list = Appointment.query.filter_by(user_id=user_id).all()

    return appointment_list
