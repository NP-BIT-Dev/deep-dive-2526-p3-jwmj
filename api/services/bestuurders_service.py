import os
from pathlib import Path
from sqlalchemy.orm import Session
from models.bestuurders import BestuurderModel

STATIC_DIR = Path(__file__).resolve().parent.parent

def get_all_bestuurders(db: Session):
    return db.query(BestuurderModel).all()

def delete_bestuurder(db: Session, member_id: int):
    member = db.query(BestuurderModel).filter(BestuurderModel.id == member_id).first()
    if not member:
        return False
    
    if member.image_path:
        file_path = STATIC_DIR / member.image_path
        if os.path.exists(file_path):
            os.remove(file_path)
            
    db.delete(member)
    db.commit()
    return True