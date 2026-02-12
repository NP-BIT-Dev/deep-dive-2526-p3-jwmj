from typing import List
from fastapi import APIRouter, HTTPException, Depends, Form
from sqlalchemy.orm import Session
from utils.database import get_db
from schemas.activities import ActivityResponse
from models.activities import ActivityModel
from services import activities_service

router = APIRouter(prefix="/activities")

@router.get("/", response_model=List[ActivityResponse])
def read_activities(db: Session = Depends(get_db)):
    return activities_service.get_all_activities(db)

@router.post("/")
async def create_activity(
    activity: str = Form(...),
    datum: str = Form(...),
    locatie: str = Form(...),
    db: Session = Depends(get_db)
):
    new_post = ActivityModel(datum=datum, activiteit=activity, locatie=locatie)
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
