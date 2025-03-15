import random
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI(title="Historic Figures API")

# Configure CORS to allow requests from your frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Default Vite dev server port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define the data model
class HistoricFigure(BaseModel):
    id: int
    name: str
    years: str
    image: str
    achievements: str

# Sample data
historic_figures = [
    {
        "id": 1,
        "name": "Ada Lovelace",
        "years": "1815-1852",
        "image": "https://placehold.co/400x500/3498db/ffffff?text=Ada+Lovelace",
        "achievements": "Recognized as the first computer programmer, Ada Lovelace wrote the first algorithm intended to be processed by a machine. She worked on Charles Babbage's Analytical Engine and foresaw the potential of computers beyond mere calculations."
    },
    {
        "id": 2,
        "name": "Nikola Tesla",
        "years": "1856-1943",
        "image": "https://placehold.co/400x500/e74c3c/ffffff?text=Nikola+Tesla",
        "achievements": "Pioneering inventor who contributed to the design of the modern alternating current electricity supply system. Tesla developed numerous devices that were years ahead of their time, including wireless transmission of energy."
    },
    {
        "id": 3,
        "name": "Marie Curie",
        "years": "1867-1934",
        "image": "https://placehold.co/400x500/9b59b6/ffffff?text=Marie+Curie",
        "achievements": "The first person to win Nobel Prizes in two different scientific fields (Physics and Chemistry). She discovered the elements polonium and radium, and pioneered research on radioactivity, a term she coined herself."
    },
    {
        "id": 4,
        "name": "Alan Turing",
        "years": "1912-1954",
        "image": "https://placehold.co/400x500/2ecc71/ffffff?text=Alan+Turing",
        "achievements": "Father of theoretical computer science and artificial intelligence. During WWII, Turing played a pivotal role in breaking the Nazi Enigma code, which historians believe shortened the war by years and saved millions of lives."
    },
    {
        "id": 5,
        "name": "Rosalind Franklin",
        "years": "1920-1958",
        "image": "https://placehold.co/400x500/f39c12/ffffff?text=Rosalind+Franklin",
        "achievements": "Her X-ray diffraction images of DNA were crucial in identifying its structure. Though often overlooked during her lifetime, her work was instrumental in the discovery of DNA's double helix structure."
    },
    {
        "id": 6,
        "name": "Grace Hopper",
        "years": "1906-1992",
        "image": "https://placehold.co/400x500/1abc9c/ffffff?text=Grace+Hopper",
        "achievements": "Computer scientist who invented one of the first compiler tools and popularized the idea of machine-independent programming languages. She was a pioneer of computer programming and coined the term 'debugging'."
    },
    {
        "id": 7,
        "name": "Ibn al-Haytham",
        "years": "965-1040",
        "image": "https://placehold.co/400x500/34495e/ffffff?text=Ibn+al-Haytham",
        "achievements": "Considered the father of modern optics, he made significant contributions to the principles of optics, astronomy, and visual perception. His Book of Optics established the scientific method centuries before European scholars."
    },
    {
        "id": 8,
        "name": "Katherine Johnson",
        "years": "1918-2020",
        "image": "https://placehold.co/400x500/16a085/ffffff?text=Katherine+Johnson",
        "achievements": "NASA mathematician whose calculations of orbital mechanics were critical to the success of the first U.S. crewed spaceflights. Her work broke barriers for African American women in STEM fields."
    }
]

@app.get("/")
def read_root():
    return {"message": "Welcome to the Historic Figures API"}

@app.get("/api/figures", response_model=List[HistoricFigure])
def get_all_figures():
    return historic_figures

@app.get("/api/figures/random", response_model=HistoricFigure)
def get_random_figure():
    return random.choice(historic_figures)

@app.get("/api/figures/{figure_id}", response_model=HistoricFigure)
def get_figure_by_id(figure_id: int):
    for figure in historic_figures:
        if figure["id"] == figure_id:
            return figure
    return {"error": "Figure not found"}, 404

# Run with: uvicorn main:app --reload