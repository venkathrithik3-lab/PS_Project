import uvicorn
from fastapi import FastAPI

app = FastAPI(title="Programmatic Uvicorn App")

@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "engine": "uvicorn"
    }

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)