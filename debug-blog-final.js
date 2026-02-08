
const { getBlogPosts } = require('./src/lib/blog');
const posts = getBlogPosts();
console.log(JSON.stringify(posts, null, 2));
