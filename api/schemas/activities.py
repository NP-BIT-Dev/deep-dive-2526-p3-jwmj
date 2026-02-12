from typing import Optional
from pydantic import BaseModel, Field

class ActivityBase(BaseModel):
    datum: str
    activity: Optional[str] = None
    locatie: Optional[str] = None

class ActivityCreate(ActivityBase):
    pass

class ActivityResponse(BaseModel):
    id: int
    datum: str
    activity: Optional[str] = Field(default=None, validation_alias="activiteit")
    locatie: Optional[str] = None

    class Config:
        from_attributes = True