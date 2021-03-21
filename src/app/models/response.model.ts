import { Doc } from "./doc.model";

export class Response {
    numFound: number;
    start: number;
    docs: Doc[];
}