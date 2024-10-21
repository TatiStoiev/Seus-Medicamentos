import requests
import time
from bs4 import BeautifulSoup
from selenium import webdriver 


url = "https://consultas.anvisa.gov.br/#/medicamentos/"

def fetch(url):
    try:
        response = requests.get(url, timeout=5)
        time.sleep(2)
    except requests.ReadTimeout:
        return None
    if response.status_code == 200:
        return response.text
    return None

def search_medicine(): 
    html_content = fetch(url)
    soup = BeautifulSoup(html_content, "html.parser")

