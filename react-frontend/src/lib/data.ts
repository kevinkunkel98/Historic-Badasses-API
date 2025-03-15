export interface HistoricFigure {
  id: number
  name: string
  years: string
  image: string
  achievements: string
}

export const historicFigures: HistoricFigure[] = [
  {
    id: 1,
    name: "Ada Lovelace",
    years: "1815-1852",
    image: "https://placehold.co/400x500",
    achievements:
      "Recognized as the first computer programmer, Ada Lovelace wrote the first algorithm intended to be processed by a machine. She worked on Charles Babbage's Analytical Engine and foresaw the potential of computers beyond mere calculations.",
  },
  {
    id: 2,
    name: "Nikola Tesla",
    years: "1856-1943",
    image: "https://placehold.co/400x500",
    achievements:
      "Pioneering inventor who contributed to the design of the modern alternating current electricity supply system. Tesla developed numerous devices that were years ahead of their time, including wireless transmission of energy.",
  },
  {
    id: 3,
    name: "Marie Curie",
    years: "1867-1934",
    image: "https://placehold.co/400x500",
    achievements:
      "The first person to win Nobel Prizes in two different scientific fields (Physics and Chemistry). She discovered the elements polonium and radium, and pioneered research on radioactivity, a term she coined herself.",
  },
  {
    id: 4,
    name: "Alan Turing",
    years: "1912-1954",
    image: "https://placehold.co/400x500",
    achievements:
      "Father of theoretical computer science and artificial intelligence. During WWII, Turing played a pivotal role in breaking the Nazi Enigma code, which historians believe shortened the war by years and saved millions of lives.",
  },
  {
    id: 5,
    name: "Rosalind Franklin",
    years: "1920-1958",
    image: "https://placehold.co/400x500",
    achievements:
      "Her X-ray diffraction images of DNA were crucial in identifying its structure. Though often overlooked during her lifetime, her work was instrumental in the discovery of DNA's double helix structure.",
  },
  {
    id: 6,
    name: "Grace Hopper",
    years: "1906-1992",
    image: "https://placehold.co/400x500",
    achievements:
      "Computer scientist who invented one of the first compiler tools and popularized the idea of machine-independent programming languages. She was a pioneer of computer programming and coined the term 'debugging'.",
  },
  {
    id: 7,
    name: "Ibn al-Haytham",
    years: "965-1040",
    image: "https://placehold.co/400x500",
    achievements:
      "Considered the father of modern optics, he made significant contributions to the principles of optics, astronomy, and visual perception. His Book of Optics established the scientific method centuries before European scholars.",
  },
  {
    id: 8,
    name: "Katherine Johnson",
    years: "1918-2020",
    image: "https://placehold.co/400x500",
    achievements:
      "NASA mathematician whose calculations of orbital mechanics were critical to the success of the first U.S. crewed spaceflights. Her work broke barriers for African American women in STEM fields.",
  },
]

