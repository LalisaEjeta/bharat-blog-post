const edit = document.getElementById("edit");
const likes = document.getElementById("like");
const read = document.getElementById("read");
const create = document.getElementById("create");
const save = document.getElementById("save");
const blogCont = document.getElementById("blogCont");
const titleModal = document.getElementById("titleModal");
const dateModal = document.getElementById("dateModal");
const detailModal = document.getElementById("detailModal");
const CreateModal = document.getElementById("CreateModal");
const edittingModal = document.getElementById("edittingModal");
const shareModal = document.getElementById("shareModal");

// const form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//   event.preventDefault();
// });

function generateID() {
  return Math.floor(Math.random() * 100000000);
}

// const form2 = document.getElementById("edittingModal");
// form2.addEventListener("submit", function (event) {
//   event.preventDefault();
// });

// Creating the post
save.addEventListener("click", function () {
  const titleModal = document.getElementById("titleModal");
  const dateModal = document.getElementById("dateModal");
  const detailModal = document.getElementById("detailModal");

  //   Post text field
  const eachPost = document.createElement("div");
  eachPost.className = "my-3 border p-3 bg-warning";
  eachPost.id = generateID();
  blogCont.appendChild(eachPost);
  const postText = document.createElement("div");
  eachPost.appendChild(postText);

  const postTitle = document.createElement("h1");
  const postDate = document.createElement("p");
  const postDetail = document.createElement("p");
  postText.appendChild(postTitle);
  postText.appendChild(postDate);
  postText.appendChild(postDetail);
  postDetail.className = "d-none";
  postDetail.id = "detail";

  //   Post buttons field
  const impressions = document.createElement("div");
  eachPost.appendChild(impressions);
  impressions.className = "m-4 d-flex";
  eachPost.appendChild(impressions);

  // Create the like button with heart icon
  const like = document.createElement("div");
  const iconHeart = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  like.className = "mx-2 d-flex hov text-center d-flex justify-content-center";
  iconHeart.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  iconHeart.setAttribute("width", "16");
  iconHeart.setAttribute("height", "16");
  iconHeart.setAttribute("fill", "currentColor");
  iconHeart.setAttribute("class", "bi bi-heart-fill");
  iconHeart.setAttribute("viewBox", "0 0 16 16");
  iconHeart.id = "heart";
  like.appendChild(iconHeart);
  const pathHeart = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  pathHeart.setAttribute("fill-rule", "evenodd");
  pathHeart.setAttribute(
    "d",
    "M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
  );
  iconHeart.appendChild(pathHeart);
  like.appendChild(document.createTextNode(" Like"));
  like.addEventListener("click", function () {
    iconHeart.classList.toggle("text-danger");
  });
  impressions.appendChild(like);

  // Create the comment button with chat icon
  const comment = document.createElement("div");
  const iconComment = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  comment.className =
    "mx-2 d-flex hov text-center d-flex justify-content-center";
  iconComment.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  iconComment.setAttribute("width", "16");
  iconComment.setAttribute("height", "16");
  iconComment.setAttribute("fill", "currentColor");
  iconComment.setAttribute("class", "bi bi-chat-left");
  iconComment.setAttribute("viewBox", "0 0 16 16");
  comment.appendChild(iconComment);
  const pathComment = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  pathComment.setAttribute(
    "d",
    "M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"
  );
  iconComment.appendChild(pathComment);
  comment.appendChild(document.createTextNode(" Comment"));
  impressions.appendChild(comment);

  // Create the share button with share icon
  const share = document.createElement("div");
  const iconShare = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  share.className = "mx-2 d-flex hov text-center d-flex justify-content-center";
  iconShare.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  iconShare.setAttribute("width", "16");
  iconShare.setAttribute("height", "16");
  iconShare.setAttribute("fill", "currentColor");
  iconShare.setAttribute("class", "bi bi-share");
  iconShare.setAttribute("viewBox", "0 0 16 16");
  share.appendChild(iconShare);
  const pathShare = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  pathShare.setAttribute(
    "d",
    "M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
  );
  iconShare.appendChild(pathShare);
  share.appendChild(document.createTextNode(" Share"));
  impressions.appendChild(share);

  share.addEventListener("click", function() {
    shareModal.showModal()
  });

  //   Post buttons field
  const btns = document.createElement("div");
  btns.className = "m-4";
  eachPost.appendChild(btns);

  const showBtn = document.createElement("button");
  showBtn.innerText = "Show more";
  showBtn.className = "btn btn-primary mx-1";
  showBtn.id = "read";

  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit post";
  editBtn.className = "btn btn-info mx-1";
  editBtn.id = "edit";

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "btn btn-danger mx-1";
  deleteBtn.id = "delete";

  btns.appendChild(showBtn);
  btns.appendChild(editBtn);
  btns.appendChild(deleteBtn);

  postTitle.innerText = titleModal.value;
  postDate.innerText = dateModal.value;
  postDetail.innerText = detailModal.value;

  const editTitle = document.getElementById("editTitle");
  const editDate = document.getElementById("editDate");
  const editDetail = document.getElementById("editDetail");
  const saving = document.getElementById("saving");

  editBtn.addEventListener("click", function () {
    editTitle.value = postTitle.innerText;
    editDate.value = postDate.innerText;
    editDetail.value = postDetail.innerText;
    edittingModal.showModal();
  });

  saving.addEventListener("click", function () {
    eachPost.id = null;
    // if (eachPost.contains(this.target)) {
    // console.log(eachPost.id);

    postTitle.innerText = editTitle.value;
    postDate.innerText = editDate.value;
    postDetail.innerText = editDetail.value;
    // }

    edittingModal.close();
  });

  showBtn.addEventListener("click", function () {
    postDetail.classList.toggle("d-none");
    if (postDetail.classList.contains("d-none")) {
      showBtn.innerText = "Read more";
    } else {
      showBtn.innerText = "Show less";
    }
  });

  deleteBtn.addEventListener("click", function () {
    eachPost.remove();
  });

  modal.close();
});

create.addEventListener("click", function () {
  modal.showModal();
});

likes.addEventListener("click", function () {
  const heart = document.getElementById("heart");
  heart.classList.toggle("text-danger");
});

read.addEventListener("click", function () {
  const detail = document.getElementById("detail");
  detail.classList.toggle("d-none");
  if (detail.classList.contains("d-none")) {
    read.innerText = "Read more";
  } else {
    read.innerText = "Show less";
  }
});
