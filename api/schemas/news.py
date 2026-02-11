from typing import List
from datetime import datetime
from pydantic import BaseModel

class NewsBase(BaseModel):
    title: str
    content: str

class NewsCreate(NewsBase):
    pass

class NewsResponse(BaseModel):
    id: int
    title: str
    date_posted: datetime
    images: List[ImageResponse]

    class Config:
        from_attributes = True

class ImageResponse(BaseModel):
    id: int
    file_path: str

    class Config:
        from_attributes = True
