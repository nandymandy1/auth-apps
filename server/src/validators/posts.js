import { check } from "express-validator";

const title = check("title", "Title of post is required.").not().isEmpty();
const content = check("content", "Content is required.").not().isEmpty();

export const PostRules = [title, content];
