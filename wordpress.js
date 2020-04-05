fetch("http://multidani.eu/shop/wp-json/wp/v2/shop_item")
  .then(res=>res.json())
  .then(loopThroughPosts)

function loopThroughPosts(posts){
  posts.forEach( post =>{
    console.log(post.image.guid)
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
    copy.querySelector(".item_name").textContent = post.iname;
    copy.querySelector(".price_text").textContent = "$" + post.price;
    copy.querySelector(".body").innerHTML=post.content.rendered;
    copy.querySelector(".item_photo").src = post.image.guid;
    document.querySelector("main").appendChild(copy)
  })
}