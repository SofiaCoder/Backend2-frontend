// Hämta element från DOM
const postForm = document.querySelector("#post-form");
const postInput = document.querySelector("#post-input");
const postList = document.querySelector("#post-list");
const friendList = document.querySelector("#friend-list");
const friendForm = document.querySelector("#friend-form");
const friendInput = document.querySelector("#friend-input");

// Array med exempelinlägg
let posts = [
  { text: "Välkommen till mitt flöde!", author: "ChatGPT", date: new Date() },
  { text: "Jag älskar att koda!", author: "ChatGPT", date: new Date() },
  {
    text: "Det här är mitt första inlägg",
    author: "ChatGPT",
    date: new Date(),
  },
];

// Funktion för att skapa HTML för ett inlägg
function createPostHTML(post) {
  const html = `
    <div class="post">
      <h3>${post.author} skrev:</h3>
      <p>${post.text}</p>
      <div class="actions">
        <a href="#">Gilla</a>
        <span>${post.date.toLocaleString()}</span>
      </div>
    </div>
  `;
  return html;
}

// Funktion för att skapa HTML för en vän
function createFriendHTML(friend) {
  const html = `
    <div class="friend">
      <a href="#">${friend}</a>
    </div>
  `;
  return html;
}

// Funktion för att rendera inlägg på sidan
function renderPosts() {
  // Rensa befintliga inlägg
  postList.innerHTML = "";
  // Skapa HTML för varje inlägg och lägg till på sidan
  posts.forEach((post) => {
    const postHTML = createPostHTML(post);
    postList.insertAdjacentHTML("beforeend", postHTML);
  });
}

// Funktion för att lägga till ett nytt inlägg
function addPost(event) {
  event.preventDefault();
  // Hämta text från formuläret
  const text = postInput.value;
  // Skapa nytt inlägg-objekt och lägg till i arrayen
  const post = { text: text, author: "Du", date: new Date() };
  posts.push(post);
  // Rensa input-fältet
  postInput.value = "";
  // Uppdatera sidan med nya inlägg
  renderPosts();
}

// Funktion för att lägga till en ny vän
function addFriend(event) {
  event.preventDefault();
  // Hämta text från formuläret
  const name = friendInput.value;
  // Skapa HTML för vän och lägg till på sidan
  const friendHTML = createFriendHTML(name);
  friendList.insertAdjacentHTML("beforeend", friendHTML);
  // Rensa input-fältet
  friendInput.value = "";
}

// Lägg till lyssnare på formulär för att lägga till inlägg
postForm.addEventListener("submit", addPost);

// Lägg till lyssnare på formulär för att lägga till vän
friendForm.addEventListener("submit", addFriend);

// Rendera befintliga inlägg på sidan
renderPosts();
