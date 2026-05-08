from pydantic import BaseModel
from typing import List

class ChartDataPoint(BaseModel):
    category: str
    value: float

class ReadmittedStudentsResponse(BaseModel):
    title: str
    chart_type: str
    data: List[ChartDataPoint]

