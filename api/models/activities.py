from sqlalchemy import Column, Integer, String, ForeignKey
from utils.database import Base

class ActivityModel(Base):
    __tablename__ = "activities"
    id = Column(Integer, primary_key=True, index=True)
    datum = Column(String, nullable=False)
    activiteit = Column(String, nullable=True)
    locatie = Column(String, nullable=True)