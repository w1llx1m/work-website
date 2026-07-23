from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

@app.get("/")
def home():
    return{"Data": "Test"}


origins = [
    "http://localhost:5173",  # dev do Vite
    "https://montheon.com.br",  # produção, quando existir
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)