from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from sqlalchemy import create_engine, text

DATABASE_URL = "mysql+pymysql://root:12345@localhost:3306/musicdb"
engine = create_engine(DATABASE_URL, echo=True)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Song(BaseModel):
    title: str
    artist: str

@app.get("/")
def root():
    return {"message": "API connected to MySQL!"}

@app.get("/songs")
def get_songs():
    with engine.connect() as conn:
        result = conn.execute(text("SELECT * FROM songs"))
        songs = [dict(row._mapping) for row in result]
    return songs

# POST single song
@app.post("/songs")
def add_song(song: Song):
    with engine.connect() as conn:
        query = text("INSERT INTO songs (title, artist) VALUES (:title, :artist)")
        conn.execute(query, {"title": song.title, "artist": song.artist})
        conn.commit()
    return {"message": "Song added successfully", "song": song}

# POST multiple songs
@app.post("/songs/bulk")
def add_multiple_songs(songs: List[Song]):
    with engine.connect() as conn:
        for song in songs:
            query = text("INSERT INTO songs (title, artist) VALUES (:title, :artist)")
            conn.execute(query, {"title": song.title, "artist": song.artist})
        conn.commit()
    return {"message": f"{len(songs)} songs added successfully"}
