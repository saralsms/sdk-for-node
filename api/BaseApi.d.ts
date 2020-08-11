import { AxiosInstance } from 'axios';
interface CreditData {
    credits: number;
    total_sent: number;
}
interface MessageData {
    message: string;
    undelivered: Array<{
        [key: string]: number | string;
    }>;
}
interface ReportData {
    pages: number;
    data: Array<{
        [key: string]: number | string;
    }>;
}
interface CreditError {
    message: string;
}
interface MessageError {
    message: string;
}
interface ReportError {
    message: string;
}
export default abstract class BaseApi {
    protected api: AxiosInstance;
    constructor(authToken: string);
    getCredits(): Promise<CreditData | CreditError>;
    getReports(page?: number): Promise<ReportData | ReportError>;
    send(numbers: Array<number | string>, message: string): Promise<MessageData | MessageError>;
}
export {};
