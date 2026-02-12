from typing import Optional
from pydantic import BaseModel

class BestuurderBase(BaseModel):
    name: str
    role: str
    quote: Optional[str] = None

class BestuurderCreate(BestuurderBase):
    file: str

class BestuurderResponse(BestuurderBase):
    id: int
    image_path: str

    class Config:
        from_attributes = True