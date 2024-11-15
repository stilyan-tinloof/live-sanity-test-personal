import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  fields: [
    defineField({
      name: "publishedAt",
      title: "Publication date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      to: [{ type: "blog.author" }],
      type: "reference",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
      validation: (Rule) => Rule.required(),
    }),
  ],
  name: "blog.post",
  title: "Blog post",
  type: "document",
});
