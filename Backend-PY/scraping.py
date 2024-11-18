import requests
import time
from bs4 import BeautifulSoup
from selenium import webdriver 
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait


url = "https://consultas.anvisa.gov.br/#/bulario/"

## acessar o site 
## digitar o nome do medicamento no campo (input class form-control ng-pristine ng-valid ng-touched)
## já aparecem algumas opções de nome do medicamento (ex omeprazol, aparece omeprazol, esomeprazol)
## clicar no botão consultar (input class btn btn-primary type submit value consultar)
## já aparece o nome de varios medicamentos com o nome igual e uma imagem pdf para acessar a bula (são dois, bula para usuario e para profissional)
## se clicar no nome de um deles (aparece uma lista é um href classe ng-binding)
## abre uma nova guia, clicar no campo bulario eletronico, acesse aqui (tag a class ng-scope)
## as opções de bula são em formato pdf, o mesmo que apareceu anteriormente, clicar em uma imagem (src=assets/img/pdf.png)
## problema encontrado é que ele não abre a bula no navegador mas já faz o download do pdf

def fetch_medicine_leaflet(url, medicine_name):
    
        driver = webdriver.Chrome()
        driver.get(url)
        driver.implicitly_wait(5)
        
        text_input = driver.find_element(By.CSS_SELECTOR, ".form-control.ng-pristine.ng-valid.ng-touched")
        text_input.send_keys(medicine_name)

        submit_button = driver.find_element(By.CSS_SELECTOR, ".btn.btn-primary")
        submit_button.click()

        try:
            result = WebDriverWait(driver, 10).until(
                EC.element_to_be_clickable((By.XPATH, '//a[@ng-click="downloadBula(produto.idBulaPacienteProtegido,Authorization)"]'))
    )
        link_pdf.click() 
            


        except: 

        finally: 
        driver.quit()





