from fastapi import APIRouter
from app.domains.admission.router import router as admission_router

api_router = APIRouter()
api_router.include_router(admission_router, prefix="/admission", tags=["Admission"])