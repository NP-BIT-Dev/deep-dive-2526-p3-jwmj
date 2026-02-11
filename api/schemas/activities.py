from pydantic import BaseModel, Field

class ActivityBase(BaseModel):
    datum: str
    activity: str
    locatie: str

class ActivityCreate(ActivityBase):
    pass

class ActivityResponse(BaseModel):
    id: int
    datum: str
    activity: str = Field(validation_alias="activiteit")
    locatie: str

    class Config:
        from_attributes = True