export interface Movie {
  kind: string;
  id: string;
  name: string;
  mimeType: string;
  content: string;
}

export interface Category {
  kind: string;
  id: string;
  name: string;
  mimeType: string;
  movies: Movie[];
}
