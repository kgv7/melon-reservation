"""Server for Melon Reservation Take Home."""

from flask import (Flask, render_template, request, flash, session,
                   redirect, jsonify, send_from_directory)
from model import connect_to_db
import crud, os

# JWT for token creation
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

app = Flask(__name__, template_folder='../src')
app.secret_key = "dev"
# app.jinja_env.undefined = StrictUndefined

# for token
app.config["JWT_SECRET_KEY"] = os.environ["JWTKEY"]
jwt = JWTManager(app)


def create_token(user_id):
    """Create Access Token for Login"""
    access_token = create_access_token(identity=user_id)

    return access_token

@app.route("/api/login", methods=['POST'])
def login_user():
    """Login user into Melon Reservation"""

    username = request.json.get("username", None)
    print(username)

    user = crud.verify_user(username)
    print(user)

    if not user:
        return jsonify({"msg": "This email does not have an account"}), 401
    else:
        access_token = create_token(user.user_id)
        return jsonify(access_token=access_token,
                        username=user.username,
                        user_id=user.user_id,)

@app.route("/api/appointment-list-<user_id>")
def get_appointment_list(user_id):

    appointment_list = crud.get_appointment_by_user(user_id)

    print(appointment_list)

    if not appointment_list:
        return jsonify({"msg": "There are no appointments scheduled."})
    else:
        
        for item in appointment_list:
            [appt_id, date, start_time, end_time, user_id] = appointment_list
        
        return jsonify(date = date,
                        start_time = start_time,
                        end_time = end_time)


@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def index(path):
    return render_template("index.html")

@app.errorhandler(404)
def not_found(_error):
    return render_template("index.html")

if __name__ == "__main__":
    # DebugToolbarExtension(app)
    connect_to_db(app)
    app.run(host="0.0.0.0", debug=True, port=5001)