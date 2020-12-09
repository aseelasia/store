import mysql.connector
import json
from mysql.connector import Error
from flask import Flask
from flask_cors import CORS
import base64
app = Flask(__name__)
cors = CORS(app)
@app.route('/<catagory>')
def search(catagory):
    try:
        connection = mysql.connector.connect(host='localhost',
                                         database='store',
                                         user='root',
                                         password='1234')
        cursor = connection.cursor(buffered=True)
        sql_select_query = """select product.productID,product.productName,product.price,product.image,product.typecatagoryID,catagory_type.catagoryID from product """
        sql_select_query += "INNER JOIN catagory_type ON product.typecatagoryID = catagory_type.catagory_typeID "
        sql_select_query += ("where catagory_type.catagoryID = %s" % catagory)
        cursor.execute(sql_select_query)
        record = cursor.fetchall()
        data_list = {}
        data_list['wProduct'] = []
        for row in record:
            data={'id':row[0],'productName':row[1],'price':row[2], 'image':base64.b64encode(row[3]).decode('utf-8')}
            data_list['wProduct'].append(data)

        with open('data_file.json', 'w', encoding='utf8') as write_file:
            json.dump(data_list, write_file, ensure_ascii=False, indent=1)

    except mysql.connector.Error as error:
        print("Failed to get record from MySQL table: {}".format(error))

    finally:
        if (connection.is_connected()):
            cursor.close()
            connection.close()
            print("MySQL connection is closed")