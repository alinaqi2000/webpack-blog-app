export default class Post {
    constructor(
        public id: number,
        public title: string,
        public image: string,
        public detail: string,
        public author_name: string,
        public author_avatar: string,
        public createdAt: Date
    ) {

    }
}