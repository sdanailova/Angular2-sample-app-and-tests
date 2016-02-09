export interface Speaker {
  id: number;
  name: string;
}
export interface Lecture {
  id: number;
  title: string;
  speaker: number;//the speaker id
}
