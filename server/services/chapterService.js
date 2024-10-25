import Chapter from "../models/chapterSchema.js";

export const create = async (data) => {
  const result = Chapter.create(data);
  return result;
}