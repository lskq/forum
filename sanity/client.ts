import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "droe9z6w",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: "skmXefgtSyPHDsIGaZMg48sLgXjinobgkznGCByzgHuokOLp2GKSWIQ7BTvKVES1ZWSHAn12HcCOEsEMU4IS6gaM7RK78XdGh45XaQyiDS4KQO7evxmUftch2uxEOqE5dJonah7brY8Edby7eUg5BftGWnkQ8WI7BO47YB6p1XljbRIrB6e0",
  useCdn: false,
});