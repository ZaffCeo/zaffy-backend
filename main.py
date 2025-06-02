from fastapi import FastAPI
from app.api_router import router as api_router

app = FastAPI(title="Zaffy Backend", version="0.1.0")

# सभी राउट्स को शामिल करें
app.include_router(api_router)

@app.get("/")
async def root():
    return {"message": "Zaffy AI Backend is up and running!"}
