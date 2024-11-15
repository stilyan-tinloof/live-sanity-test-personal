import { defineField, defineType } from "sanity";

export default defineType({
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      options: {
        hotspot: true,
      },
      type: "image",
    }),
  ],
  name: "blog.author",
  title: "Blog author",
  type: "document",
});
