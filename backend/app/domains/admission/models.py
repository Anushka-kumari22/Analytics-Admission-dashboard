from sqlalchemy import Column, Integer, String, Date
from app.db.session import Base

class ReadmittedStudentRecord(Base):
    __tablename__ = "readmitted_students"
    
    id = Column(Integer, primary_key=True, index=True)
    semester = Column(String)
    count = Column(Integer)
    created_at = Column(Date)