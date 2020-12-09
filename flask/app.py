from flask import Flask
from flask_mysqldb import MySQL
from flask_cors import CORS, cross_origin

import base64
import json
app = Flask(__name__)
CORS(app)

app.config['MYSQL_HOST']= 'localhost'
app.config['MYSQL_USER']= 'root'
app.config['MYSQL_PASSWORD'] ='1234'
app.config['MYSQL_DB'] ='store'
app.config['CORS_HEADERS'] = 'Content-Type'

mysql =MySQL(app)

@app.route('/<catagory>')
@cross_origin()
def search(catagory):
    cursor = mysql.connection.cursor()
    sql_select_query = """select product.productID,product.productName,product.price,product.image,product.typecatagoryID,catagory_type.catagoryID from product """
    sql_select_query += """INNER JOIN catagory_type ON product.typecatagoryID = catagory_type.catagory_typeID """
    sql_select_query += ("""where catagory_type.catagoryID = %s""" %(catagory))
    cursor.execute(sql_select_query)
    record = cursor.fetchall()
    data_list = {}
    data_list[catagory] = []
    for row in record:
        data={'id':row[0],'productName':row[1],'price':row[2]}#, 'image':base64.b64encode(row[3]).decode('utf-8')
        data_list[catagory].append(data)
        
    return json.dumps(data_list, ensure_ascii=False, indent=1).encode('utf8')
