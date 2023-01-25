import type Rating from "./Rating";

export default interface SurveyResultEntry {
  id: string;
  rating: Rating | null;
  name: string;
}
