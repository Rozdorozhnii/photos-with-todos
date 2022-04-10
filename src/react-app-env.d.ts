/// <reference types="react-scripts" />
interface Todo {
  id: number;
  description: string;
  status: boolean;
}

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
