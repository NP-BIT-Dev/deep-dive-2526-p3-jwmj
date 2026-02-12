from typing import Optional
from pydantic import BaseModel

class bestuurdersBase(BaseModel):
    name: str
    role: str
    quote: Optional[str] = None

class bestuurdersCreate(bestuurdersBase):
    pass

class bestuurdersResponse(bestuurdersBase):
    id: int
    image_path: str

    class Config:
        from_attributes = True