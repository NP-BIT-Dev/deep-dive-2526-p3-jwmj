from typing import List, Optional
from datetime import datetime
from pydantic import BaseModel

class NewsBase(BaseModel):
    title: str
    description: Optional[str] = None
    content: Optional[str] = None

class NewsCreate(NewsBase):
    pass

class ImageResponse(BaseModel):
    id: int
    file_path: str

    class Config:
        from_attributes = True

class NewsResponse(BaseModel):
    id: int
    title: str
    date_posted: datetime
    description: Optional[str] = None
    content: Optional[str] = None
    images: List[ImageResponse]

    class Config:
        from_attributes = True