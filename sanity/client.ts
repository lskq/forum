import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "droe9z6w",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});