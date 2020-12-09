from flask import Flask
from flask_mysqldb import MySQL
from flask_cors import CORS, cross_origin
from flask import request

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
def product(catagory):
    cursor = mysql.connection.cursor()
    sql_select_query = """select product.productID,product.productName,product.price,product.image,product.typecatagoryID,catagory_type.catagoryID from product """
    sql_select_query += """INNER JOIN catagory_type ON product.typecatagoryID = catagory_type.catagory_typeID """
    sql_select_query += ("""where catagory_type.catagoryID = %s""" %(catagory))
    cursor.execute(sql_select_query)
    record = cursor.fetchall()
    data_list = {}
    data_list["product"] = []
    for row in record:
        data={'id':row[0],'productName':row[1],'price':row[2], 'image':base64.b64encode(row[3]).decode('utf-8')}
        data_list["product"].append(data)
        
    return json.dumps(data_list, ensure_ascii=False, indent=1).encode('utf8')

@app.route('/menu/<catagory>/<type>')
@cross_origin()
def menu(catagory,type):
    cursor = mysql.connection.cursor()
    sql_select_query = """select catagory_type.typeID, catagory_type.catagoryID, type.typeID, type.typeName, type.catagory from catagory_type """
    sql_select_query += """INNER JOIN type ON type.typeID = catagory_type.typeID """
    sql_select_query += ("""where catagory_type.catagoryID  = %s"""%(catagory))
    cursor.execute(sql_select_query)
    record = cursor.fetchall()
    data_list = {}

    data_list["menu"] = []
    for row in record:
        data={'id':row[0],'Name':row[1],'row':row[2]}
        data_list["menu"].append(data)
        
    return json.dumps(data_list, ensure_ascii=False, indent=1).encode('utf8')


