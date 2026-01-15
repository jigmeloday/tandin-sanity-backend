import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { deskTool } from "sanity/desk";

export default defineConfig({
  name: 'default',
  title: 'TravelAgent',

  projectId: 'g4ov3i6o',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), deskTool({
      structure: (S: any) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Enquiries")
              .schemaType("enquiry")
              .child(
                S.documentTypeList("enquiry")
                  .title("All Enquiries")
                  .defaultOrdering([{ field: "submittedAt", direction: "desc" }])
              ),
            ...S.documentTypeListItems().filter((item: any) => item.getId() !== "enquiry"),
          ]),
    }),],

  schema: {
    types: schemaTypes,
  },
})
