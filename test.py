import sqlite3
import pandas as pd

enf = 'Estrés'
conn = sqlite3.connect('database.db')
c = conn.cursor()
# print(pd.read_sql(f"SELECT * FROM velas", conn))
c.execute(f"SELECT * FROM velas where enfermedad ='Respiración'")
query = c.fetchall()
conn.close()
print(query)