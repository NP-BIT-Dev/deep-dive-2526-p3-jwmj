from models.activities import ActivityModel
from sqlalchemy.orm import Session
from schemas.activities import ActivityCreate

def get_all_activities(db: Session):
    return db.query(ActivityModel).all()

def create_activity_item(db: Session, activity_item: ActivityCreate):
    db_item = ActivityModel(**activity_item.model_dump())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item

def delete_activity_item(db: Session, activity_id: int):
    db_item = db.query(ActivityModel).filter(ActivityModel.id == activity_id).first()
    if not db_item:
        return False
    
    db.delete(db_item)
    db.commit()
    return True
