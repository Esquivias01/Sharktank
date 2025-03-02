import sqlite3


enf = 'Insomnio'
conn = sqlite3.connect('database.db')
c = conn.cursor()
c.execute(f"SELECT vela, texto FROM velas where enfermedad = '{enf}'")
query = c.fetchall()
conn.close()
print(query)