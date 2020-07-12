from flask import Blueprint, render_template
import time
import requests
import json
import urllib.request
#from profession_calculations import GPIO,


site = Blueprint('site',
    __name__,
    static_folder = "static",
    template_folder = "templates")

@site.route('/')
def index():
    #pull API
    #page_content = GPIO()
    url = 'http://127.0.0.1:9000/api/getdata'
    json_object = urllib.request.urlopen(url)
    data = json.load(json_object)
    page_content = data
    print(page_content)

    
    return render_template('index.html',page_content=page_content)