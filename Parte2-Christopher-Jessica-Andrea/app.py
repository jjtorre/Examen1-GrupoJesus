from flask import Flask, jsonify
import os

app = Flask(__name__)

# Endpoint principal "/"
@app.route('/')
def home():
    return jsonify({
        "mensaje": "Hola, soy Christopher Duarte",
        "nombre": "Christopher Duarte"
    })

# Endpoint "/salud"
@app.route('/salud')
def salud():
    return jsonify({"status": "ok"})

if __name__ == '__main__':
    # Usar variable de entorno PORT o por defecto 5000
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
