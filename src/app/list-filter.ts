import {Catalog} from "./catalog";

export class ListFilter {
  messier?: boolean
  catalog?: Catalog
  constellations: Array<string> = []
  types: Array<string> = []
}
