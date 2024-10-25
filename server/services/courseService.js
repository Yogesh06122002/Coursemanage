import Course from "../models/courseSchema.js";

export const create = async (data) => {
  const result = await Course.create(data);
  return result;
}

export const update = async (data) => {
  const result await Course.
}