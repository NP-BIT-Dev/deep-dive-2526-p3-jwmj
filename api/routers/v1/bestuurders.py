from typing import List, Optional
import shutil
from pathlib import Path
from fastapi import APIRouter, HTTPException, Depends, UploadFile, File, Form
from sqlalchemy.orm import Session
from utils.database import get_db
from schemas.bestuurders import BestuurderResponse, BestuurderBase
from models.bestuurders import BestuurderModel
from services import bestuurders_service

router = APIRouter(prefix="/bestuurders")

UPLOAD_DIR = Path(__file__).resolve().parent.parent.parent / "static" / "bestuurders"
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)

@router.get("/", response_model=List[BestuurderResponse])
def read_bestuurders(db: Session = Depends(get_db)):
    return bestuurders_service.get_all_bestuurders(db)

def get_bestuurder_form(
    name: str = Form(...),
    role: str = Form(...),
    quote: Optional[str] = Form(None),
) -> BestuurderBase:
    return BestuurderBase(name=name, role=role, quote=quote)

@router.post("/")
async def create_bestuurders(
    bestuurder_data: BestuurderBase = Depends(get_bestuurder_form),
    file: UploadFile = File(...),
    db: Session = Depends(get_db)
):
    clean_name = file.filename.replace(" ", "_")
    file_save_path = UPLOAD_DIR / clean_name

    with open(file_save_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    db_path = f"static/bestuurders/{clean_name}"

    new_member = BestuurderModel(**bestuurder_data.model_dump(), image_path=db_path)
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
