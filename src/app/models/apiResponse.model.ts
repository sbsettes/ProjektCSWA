import { Response } from "./response.model";
import { ResponseHeader } from "./responseHeader.model";

export class ApiResponse {
    responseHeader: ResponseHeader;
    response: Response;
}