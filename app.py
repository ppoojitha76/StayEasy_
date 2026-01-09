from flask import Flask, request, jsonify
from flask_cors import CORS
from hotels import hotels

app = Flask(__name__)
CORS(app)  # allow frontend access

@app.route("/hotels")
def get_hotels():
    city = request.args.get("city")

    if not city:
        return jsonify([])

    results = [
        hotel for hotel in hotels
        if hotel["city"].lower() == city.lower()
    ]

    return jsonify(results)

if __name__ == "__main__":
    app.run(debug=True)
