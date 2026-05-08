from sqlalchemy.orm import Session
from .models import ReadmittedStudentRecord
from .schemas import ReadmittedStudentsResponse, ChartDataPoint
from typing import List

MOCK_DATA = [
    ChartDataPoint(category="Fall 2021", value=45),
    ChartDataPoint(category="Spring 2022", value=62),
    ChartDataPoint(category="Fall 2022", value=38),
    ChartDataPoint(category="Spring 2023", value=71),
]

class AdmissionRepository:
    def __init__(self, db: Session):
        self.db = db
    
    def get_readmitted_students(self) -> ReadmittedStudentsResponse:
        records = self.db.query(ReadmittedStudentRecord).all()
        if not records:
            # Fallback to mock data
            return ReadmittedStudentsResponse(
                title="Readmitted Students by Semester",
                chart_type="bar",
                data=MOCK_DATA
            )
        # Transform DB data to chart format
        data = [ChartDataPoint(category=r.semester, value=r.count) for r in records]
        return ReadmittedStudentsResponse(
            title="Readmitted Students by Semester",
            chart_type="bar",
            data=data
        )

