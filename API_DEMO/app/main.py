import uvicorn
from fastapi import FastAPI

app = FastAPI(title="Programmatic Uvicorn App")

@app.get("/version")
def version_check():
    return {
        "version": "1.0.0",
        "author": "Srikanth"
    }

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)