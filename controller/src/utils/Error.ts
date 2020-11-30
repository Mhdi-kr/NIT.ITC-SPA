export default class {
    public code: number;
    public message: string;

    constructor(input: { message: string, code: number } | string, code?: number) {
        if (typeof input === 'string') {
            this.message = input;
            this.code = code!;
        } else {
            this.message = input.message;
            this.code = input.code;
        }
    }
}