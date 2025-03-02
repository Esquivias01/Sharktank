from flask import Flask, request, render_template,redirect, url_for
import sqlite3


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/VP')
def VP():
    return render_template('VP.html')

@app.route('/VS')
def VS():
    return render_template('VS.html')

@app.route('/SP')
def SP():
    return render_template('SP.html')

@app.route('/About_us')
def About_us():
    return render_template('About_us.html')

@app.route('/submit', methods=['GET', 'POST'])
def submit():
    if request.method == 'POST':
        enf = request.form['enfermedad']
        conn = sqlite3.connect('database.db')
        c = conn.cursor()
        c.execute(f"SELECT * FROM velas where enfermedad = '{enf}'")
        message = c.fetchall()
        print(message)
        conn.close()
        return render_template('SP.html',message=message)
    
if __name__ == '__main__':
    app.run(debug=True)
