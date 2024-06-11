// Placeholder for proper module handling in TypeScript
// You would typically have module imports here

// Define the interface for a blog post
interface BlogPost {
    title: string;
    content: string;
}

// Function to create a post
async function createPost(postData: BlogPost): Promise<void> {
    try {
        const response = await fetch('https://24dad75e-e612-4d45-9f83-22aadc72a9d0.mock.pstmn.io/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Post created:', data);
    } catch (error) {
        console.error('Error creating post:', error);
    }
}

// Example usage
// This would typically be triggered by a user action, such as form submission
const newPost: BlogPost = {
    title: 'Sample Post Title1',
    content: 'This is the content of the post.'
};

// You can call this function on form submit or on a specific event
createPost(newPost);
