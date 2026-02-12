from typing import List
from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from utils.database import get_db
from schemas.activities import ActivityResponse, ActivityCreate
from models.activities import ActivityModel
from services import activities_service

router = APIRouter(prefix="/activities")

@router.get("/", response_model=List[ActivityResponse])
def read_activities(db: Session = Depends(get_db)):
    return activities_service.get_all_activities(db)

@router.post("/")
async def create_activity(
    activity_data: ActivityCreate,
    db: Session = Depends(get_db)
):
    new_post = ActivityModel(datum=activity_data.datum, activiteit=activity_data.activity, locatie=activity_data.locatie)
    db.add(new_post)
    db.flush()

    db.commit()
    return {"message": "Activity is gepost"}

@router.delete("/{activity_id}")
def delete_activity(activity_id: int, db: Session = Depends(get_db)):
    success = activities_service.delete_activity_item(db, activity_id)
    if not success:
        raise HTTPException(status_code=404, detail="Geen airfryers gevonden")
    return {"message": "Activiteit verwijderd"}