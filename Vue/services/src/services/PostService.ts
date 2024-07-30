import { ref, Ref } from 'vue'
import IPost from '@/interfaces/IPost'

class PostService {
    private posts: Ref<Array<IPost>>;
    private post: Ref<IPost>;

    constructor() {
        this.posts = ref<Array<IPost>>([]);
        this.post = ref<IPost>({});
    }

    getPosts(): Ref<Array<IPost>> {
        return this.posts;
    }

    getPost(): Ref<IPost> {
        return this.post;
    }

    async fetchAll(): Promise<void> {
        try {
            const url = 'https://jsonplaceholder.typicode.com/posts';
            const response = await fetch(url);
            const json = await response.json();
            this.posts.value = await json;
        } catch (err) {
            console.log(err);
        }
    }

    async fetchById(id: string | string[]): Promise<void> {
        try {
            const url = `https://jsonplaceholder.typicode.com/posts/${id}`
            const response = await fetch(url);
            const json = await response.json();
            this.post.value = await json;
        } catch (err) {
            console.log(err);
        }
    }
}

export default PostService;