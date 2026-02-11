import os
import shutil
from fastapi import APIRouter, HTTPException, Depends, UploadFile, File, Form
from sqlalchemy.orm import Session
from typing import List
from utils.database import get_db
from schemas.news import NewsCreate, NewsResponse
from models.news import NewsModel, NewsImageModel
from services import news_service

router = APIRouter(prefix="/news")

UPLOAD_DIR = "static/news_images"
os.makedirs(UPLOAD_DIR, exist_ok=True)

@router.get("/", response_model=List[NewsResponse])
def read_news(db: Session = Depends(get_db)):
    return news_service.get_all_news(db)

@router.post("/")
async def create_news_with_images(
    title: str = Form(...), 
    files: List[UploadFile] = File(...), 
    db: Session = Depends(get_db)
):
    new_post = NewsModel(title=title)
    db.add(new_post)
    db.flush()

    for file in files:
        file_path = f"{UPLOAD_DIR}/{file.filename}"
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
        
        db_image = NewsImageModel(file_path=file_path, news_id=new_post.id)
        db.add(db_image)

    db.commit()
    return {"message": "Nieuws met foto's geüpload!"}

@router.delete("/{news_id}")
def delete_news(news_id: int, db: Session = Depends(get_db)):
    success = news_service.delete_news_item(db, news_id)
    if not success:
        raise HTTPException(status_code=404, detail="Bericht niet gevonden")
    return {"message": "Bericht en afbeelding verwijderd"}