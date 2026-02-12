from sqlalchemy import Column, Integer, String
from utils.database import Base

class bestuurdersModel(Base):
    __tablename__ = "bestuurders"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    role = Column(String, nullable=False)
    quote = Column(String, nullable=True)
    image_path = Column(String, nullable=False)