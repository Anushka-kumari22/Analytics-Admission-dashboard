from pydantic import BaseModel

class QuestionBase(BaseModel):
    title: str
    difficulty: str

class QuestionCreate(QuestionBase):
    pass

class QuestionOut(QuestionBase):
    id: int

    class Config:
        from_attributes = True