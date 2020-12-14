export default interface QueryType {
    limit?: string;
    offset?: string;
    sort_by?: string;
    sort_order?: string;
}

export enum Order {
    ASC = 'ASC',
    DESC = 'DESC'
}