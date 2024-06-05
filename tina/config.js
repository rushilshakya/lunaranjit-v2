import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/post",
        fields: [
          {
            type: "datetime",
            name: "date",
            required: true,
            ui: {
              timeFormat: "HH:mm",
            },
          },
          {
            type: "string",
            name: "title",
            isTitle: true,
            required: true,
          },
          {
            type: "reference",
            name: "author",
            required: true,
            collections: ["author"],
          },
          {
            type: "boolean",
            name: "pinned",
          },
          {
            type: "boolean",
            name: "draft",
          },
          {
            type: "boolean",
            name: "first_published_in",
          },
          {
            type: "string",
            name: "publication",
          },
          {
            type: "string",
            name: "publication_url",
            ui: {
              parse(value) {
                return value.trim();
              },
            },
          },
          {
            type: "string",
            name: "tags",
            label: "tags",
            list: true,
            options: [
              {
                value: "Essay",
                label: "Essay",
              },
              {
                value: "Poetry",
                label: "Poetry",
              },
              {
                value: "Caste Abolition",
                label: "Caste Abolition",
              },
              {
                value: "Worker",
                label: "Worker",
              },
              {
                value: "Pandemic",
                label: "Pandemic",
              },
              {
                value: "Immigrant",
                label: "Immigrant",
              },
              {
                value: "Feminism",
                label: "Feminism",
              },
              {
                value: "Update",
                label: "Update",
              },
            ],
          },
          {
            type: "image",
            name: "image",
            label: "image",
            ui: {
              parse(value) {
                //add leading slash to value if it doesnt exist
                return value.startsWith("/") ? value : `/${value}`;
              },
            },
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/demo/blog/${document._sys.filename}`,
        },
      },
      {
        name: "author",
        label: "Authors",
        path: "content/author",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "email",
            label: "email",
            required: true,
          },
          {
            type: "object",
            name: "social",
            label: "social",
            list: true,
            fields: [
              {
                label: "icon",
                name: "icon",
                type: "string",
              },
              {
                label: "link",
                name: "link",
                type: "string",
              },
            ],
          },
          {
            type: "image",
            name: "image",
            label: "image",
            ui: {
              parse(value) {
                //add leading slash to value if it doesnt exist
                return value.startsWith("/") ? value : `/${value}`;
              },
            },
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
