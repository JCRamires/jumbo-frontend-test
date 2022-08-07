import { JumboStore } from "../store/types";

export async function fetchStores(): Promise<JumboStore[]> {
  const response = await fetch(
    "https://api.jsonstorage.net/v1/json/00000000-0000-0000-0000-000000000000/c4357a15-46e2-4542-8e93-6aa6a0c33c1e"
  );
  
  const storesJson = await response.json();

  return storesJson
}
