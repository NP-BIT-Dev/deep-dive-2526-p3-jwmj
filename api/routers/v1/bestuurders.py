from typing import List, Optional
import urllib.request
import shutil
from pathlib import Path
from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from utils.database import get_db
from schemas.bestuurders import BestuurderResponse, BestuurderCreate
from models.bestuurders import BestuurderModel
from services import bestuurders_service

router = APIRouter(prefix="/bestuurders")

UPLOAD_DIR = Path(__file__).resolve().parent.parent.parent / "static" / "bestuurders"
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)

@router.get("/", response_model=List[BestuurderResponse])
def read_bestuurders(db: Session = Depends(get_db)):
    return bestuurders_service.get_all_bestuurders(db)

@router.post("/")
def create_bestuurders(
    bestuurder: BestuurderCreate,
    db: Session = Depends(get_db)
):
    filename = bestuurder.file.split("/")[-1].split("?")[0] or "image.png"
    clean_name = filename.replace(" ", "_")
    file_save_path = UPLOAD_DIR / clean_name
    
    req = urllib.request.Request(
        bestuurder.file,
        headers={'User-Agent': 'Mozilla/5.0'}
    )
    with urllib.request.urlopen(req) as response, open(file_save_path, 'wb') as out_file:
        shutil.copyfileobj(response, out_file)

    db_path = f"static/bestuurders/{clean_name}"
    
    new_member = BestuurderModel(
        name=bestuurder.name,
        role=bestuurder.role,
        quote=bestuurder.quote,
        image_path=db_path
    )
    db.add(new_member)
    db.commit()
    db.refresh(new_member)
    
    return {"message": "Bestuurslid toegevoegd"}

@router.delete("/{member_id}")
def delete_bestuurders(member_id: int, db: Session = Depends(get_db)):
    success = bestuurders_service.delete_bestuurder(db, member_id)
    if not success:
        raise HTTPException(status_code=404, detail="Bestuurslid niet gevonden")
    return {"message": "Bestuurslid verwijderd"}