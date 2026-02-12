from typing import List, Optional
import shutil
from pathlib import Path
from fastapi import APIRouter, HTTPException, Depends, UploadFile, File, Form
from sqlalchemy.orm import Session
from utils.database import get_db
from schemas.news import NewsResponse, NewsBase
from models.news import NewsModel, NewsImageModel
from services import news_service

router = APIRouter(prefix="/news")

UPLOAD_DIR = Path(__file__).resolve().parent.parent.parent / "static" / "news_images"
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)

@router.get("/", response_model=List[NewsResponse])
def read_news(db: Session = Depends(get_db)):
    return news_service.get_all_news(db)

def get_news_form(
    title: str = Form(...),
    description: Optional[str] = Form(None),
    content: Optional[str] = Form(None),
) -> NewsBase:
    return NewsBase(title=title, description=description, content=content)

@router.post("/")
async def create_news_with_images(
    news_data: NewsBase = Depends(get_news_form),
    files: List[UploadFile] = File(...), 
    db: Session = Depends(get_db)
):
    new_post = NewsModel(**news_data.model_dump(exclude_unset=True))
    db.add(new_post)
    db.flush()

    for file in files:
        clean_name = file.filename.replace(" ", "_")
        file_save_path = UPLOAD_DIR / clean_name
    
        with open(file_save_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
    
        db_path = f"static/news_images/{clean_name}"
        db_image = NewsImageModel(file_path=db_path, news_id=new_post.id)
        db.add(db_image)

    db.commit()
    return {"message": "Nieuws met foto's geüpload!"}

@router.delete("/{news_id}")
def delete_news(news_id: int, db: Session = Depends(get_db)):
    success = news_service.delete_news_item(db, news_id)
    if not success:
        raise HTTPException(status_code=404, detail="Bericht niet gevonden")
    return {"message": "Bericht en afbeelding verwijderd"}
