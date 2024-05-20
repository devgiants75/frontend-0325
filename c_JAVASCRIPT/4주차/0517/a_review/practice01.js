document.addEventListener('DOMContentLoaded', async () => {
  const userId = 1;

  const postsContainer = document.getElementById('posts');
  const searchInput = document.getElementById('search');
  const errorDiv = document.getElementById('error');

  let allPosts = [];

  try {
    allPosts = await fetchPosts(userId);
    displayPosts(allPosts);
  } catch(error) {
    showError('데이터를 불러오는 중 오류가 발생했습니다.');
  }

  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.trim().toLowerCase();

    if (!searchTerm) {
      displayPosts(allPosts);
      clearError();
      return;
    }

    const filteredPosts = filterPosts(allPosts, searchTerm);
    if (filteredPosts.length === 0) {
      showError('일치하는 포스트가 없습니다.');
    } else {
      displayPosts(filteredPosts);
      clearError();
    }
  });

  function displayPosts(posts) {
    postsContainer.innerHTML = '';
    posts.forEach((post) => {
      const postDiv = document.createElement('div');
      postDiv.classList.add('post');
      postDiv.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
      postsContainer.appendChild(postDiv);
    })
  }

  function filterPosts(posts, searchTerm) {
    return posts.filter(
      (post) => {
        post.title.toLowerCase().includes(searchTerm) ||
        post.body.toLowerCase().includes(searchTerm)
      }
    );
  }

  async function fetchPosts(userId) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    if (!response.ok) {
      throw new Error('네트워크 응답에 문제가 있습니다.');
    }
    return response.json();
  }

  function showError(message) {
    errorDiv.textContent = message;
  }

  function clearError(){
    errorDiv.textContent = '';
  }
});