from pydantic import BaseModel
from datetime import datetime
from typing import List

class NewsBase(BaseModel):
    title: str
    content: str

class NewsCreate(NewsBase):
    pass

class NewsResponse(NewsBase):
    id: int
    date_posted: datetime
    class Config:
        from_attributes = True

class ImageResponse(BaseModel):
    id: int
    file_path: str

    class Config:
        from_attributes = True

class NewsResponse(BaseModel):
    id: int
    title: str
    date_posted: datetime
    images: List[ImageResponse]

    class Config:
        from_attributes = True