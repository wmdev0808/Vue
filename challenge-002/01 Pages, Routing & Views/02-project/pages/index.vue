<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <section class="featured-posts">
      <PostsPostPreview
        id="1"
        thumbnail="https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
        title="Hello there!"
        previewText="This my first post!"
      />
      <PostsPostPreview
        id="2"
        thumbnail="https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
        title="Hello there - the second time!"
        previewText="This my second post!"
      />
      <PostsPostPreview
        id="3"
        thumbnail="https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
        title="Hi!"
        previewText="This my third post!"
      />
    </section>
  </div>
</template>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url(~/assets/images/main-page-background.jpg);
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
