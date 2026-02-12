import os
from pathlib import Path
from sqlalchemy.orm import Session
from models.bestuurders import bestuurdersModel

STATIC_DIR = Path(__file__).resolve().parent.parent

def get_all_board_members(db: Session):
    return db.query(bestuurdersModel).all()

def delete_board_member(db: Session, member_id: int):
    member = db.query(bestuurdersModel).filter(bestuurdersModel.id == member_id).first()
    if not member:
        return False
    
    if member.image_path:
        file_path = STATIC_DIR / member.image_path
        if os.path.exists(file_path):
            os.remove(file_path)
            
    db.delete(member)
    db.commit()
    return True