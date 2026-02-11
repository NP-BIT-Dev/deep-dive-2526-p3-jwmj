import os
from models.news import NewsModel, NewsImageModel
from sqlalchemy.orm import Session
from schemas.news import NewsCreate

def get_all_news(db: Session):
    return db.query(NewsModel).order_by(NewsModel.date_posted.desc()).all()

def create_news_item(db: Session, news_item: NewsCreate):
    db_item = NewsModel(**news_item.model_dump())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item

def delete_news_item(db: Session, news_id: int):
    db_item = db.query(NewsModel).filter(NewsModel.id == news_id).first()
    if not db_item:
        return False
    
    for img in db_item.images:
        if os.path.exists(img.file_path):
            os.remove(img.file_path)

    db.query(NewsImageModel).filter(NewsImageModel.news_id == news_id).delete()
    db.delete(db_item)
    db.commit()
    return True