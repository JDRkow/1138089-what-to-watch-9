export type Film = {
  id: number;
  name: string;
  image: string;
  previewImage: string;
  videoUrl: string;
  previewVideoUrl: string;
  description: string;
  rating: number;
  scoresCount: number;
  levelRating: string;
  directors: Director[];
  starrings: Starring[];
  runTime: number;
  released: number;
  genre: string;
  isFavored: boolean;
}

type Starring = {
  name: string;
}

type Director = {
  name: string;
}
