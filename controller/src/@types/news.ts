export default interface NewsType {
    id?: number;
    title?: string;
    article?: string;
    main_image?: string;
    inner_images?: string | string[];
    views?: number;
}