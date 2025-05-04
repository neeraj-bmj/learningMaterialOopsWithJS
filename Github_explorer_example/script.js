let input = document.querySelector("#input");
let button = document.querySelector(".btn");

function getUser() {
  let GitHubAPI_URL = "https://api.github.com/users/";
  let inputValue = input.value.trim();
  let data = fetch(GitHubAPI_URL + inputValue)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      showData(data);
    });
}

function showData(data) {
  let info = ` <!-- Profile interface-->
            <div class="card mt-5 px-10 py-5 w-1/2  bg-gray-800 rounded-lg shadow-lg flex flex-col items-center justify-center">
                <img class="avatar w-32 h-32 rounded-full" src=${data.avatar_url} alt="GitHub Logo">
                <h2 class="name text-2xl font-semibold text-zinc-200">${data.login}</h2>
                <p class="bio text-zinc-400">${data.bio}</p>
                <button type="submit" class="px-3 py-2 rounded-lg bg-blue-600 text-zinc-200 font-semibold m-5 hover:scale-105 hover:bg-blue-700"><a id="Profile_View" href=${data.html_url}>View Profile Page</a></button>

            </div>
            <!-- Repo interface -->
            <div class="repos w-1/2 px-5 py-10 bg-gray-800 rounded-lg shadow-lg mt-5 flex flex-row gap-10 items-center justify-center">
                <div class="follower__ flex flex-col gap-2 justify-center items-center">
                    <p class=" text-xl font-semibold text-zinc-300">Followers </p>
                    <div class="followers text-xl text-zinc-300 font-semibold">${data.followers}</div>
                </div>
                <div class="following__ flex flex-col gap-2 justify-center items-center">
                    <p class="text-xl font-semibold text-zinc-300">Following </p>
                    <div class="following text-xl text-zinc-300 font-semibold">${data.following}</div>
                </div>
                <div class="repo__ flex flex-col gap-2 justify-center items-center">
                    <h3 class="text-xl font-semibold text-zinc-300">Repositories</h3>
                    <div class="public_repos text-xl text-zinc-300 font-semibold">${data.public_repos}</div>
                </div>
            </div>`;

  let content = document.querySelector(".content");
  content.innerHTML = info;
}

button.addEventListener("click", function () {
  console.log(input.value);
  getUser();
});

let submit = document.querySelector(".partTwo");
submit.addEventListener("click", function (evt) {
  evt.preventDefault();
});
