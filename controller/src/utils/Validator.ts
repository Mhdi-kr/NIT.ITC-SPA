class Validator {
    private allowedLoginItems: string[];

    constructor() {
        this.allowedLoginItems = ['input', 'password', 'email', 'username']
    }

    validateLoginInput(input: object): boolean {
        const providedKeys = Object.keys(input);
        return providedKeys.every(key => {
            return this.allowedLoginItems.includes(key);
        });
    }

}

export default (new Validator());