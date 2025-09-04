from typing import Union
from fastapi import FastAPI
from ia_service import generateChat

app = FastAPI()

@app.get("/")
def read_root():
    return("Hello: World")

@app.get("/chat/{user}/{text}")
def chat(user, text):
    mensagem = generateChat(user, text)
    return mensagem