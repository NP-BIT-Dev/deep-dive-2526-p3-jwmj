from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from utils.database import Base

class NewsModel(Base):
    __tablename__ = "news"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    date_posted = Column(DateTime(timezone=True), server_default=func.now()) # pylint: disable=not-callable
    
    images = relationship("NewsImageModel", back_populates="news_item")

class NewsImageModel(Base):
    __tablename__ = "news_images"
    id = Column(Integer, primary_key=True, index=True)
    file_path = Column(String, nullable=False)
    news_id = Column(Integer, ForeignKey("news.id"))
    
    news_item = relationship("NewsModel", back_populates="images")
