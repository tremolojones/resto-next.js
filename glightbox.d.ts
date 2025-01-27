declare module 'glightbox' {
    interface GlightboxOptions {
        selector?: string;
    }

    class Glightbox {
        constructor(options?: GlightboxOptions);
    }

    export default Glightbox;
}
