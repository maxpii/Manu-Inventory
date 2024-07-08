from flask import Flask
from flask_cors import CORS
app = Flask(__name__)
cors = CORS(app,origins="*")


@app.route("/members",methods=["GET"])
def members():
    return {"Members":["member1","member2","member3"]}

app.run(debug=True)