var API = "AIzaSyDNyiYQNIeBmBpJBWBCg7FfM11507dgIcI";
var PrefixURL = "https://www.googleapis.com/blogger/v3/blogs/";
var requestURL = PrefixURL + "4773301202353643011?key=" + API;
var proxy = "https://thawing-lake-15954.herokuapp.com/";

var fetchImagesFlag = "&fetchImages=true";

var requestURL = proxy + PrefixURL + "4773301202353643011/posts?key=" + API + fetchImagesFlag;
// console.log(requestURL);
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
request.send();
// console.log(request);

//var blog = 'abc';

request.onload = function () {
    blogstr = request.response;
    // console.log(blogstr);
    blog = JSON.parse(blogstr);
    // console.log(blog);
    console.log(blog.items);
    
    for (var x=0; x<blog.items.length; x++) {
        
        // item = document.createElement('div');
        // item.setAttribute('class', 'col-11 col-lg-5 my-3 mb-5 border border-dark item');
        // item.setAttribute('id', x);
        // item.setAttribute('onclick', 'show(this.id)')

        // summaimage = document.createElement('img');
        
        // item.appendChild(summaimage);

        // title = document.createElement('div');
        // title.setAttribute('class', 'bg-primary border border-dark text-center title');
        // title.innerHTML = "<h4>" + blog.items[x].title + "</h4>";
        // item.appendChild(title);
        
        // content = document.createElement('div')
        // content.setAttribute('class', 'bg-danger text-light border border-dark text-justify px-2 content');
        // content.innerHTML = blog.items[x].content;
        
        // item.appendChild(content);

        canvas = document.getElementById('canvas');
        // canvas.appendChild(item);

        item = document.createElement('div');
        item.setAttribute('class', 'col-lg-4');
        itemImageDiv = document.createElement('div');
        itemImageDiv.setAttribute('class', 'col-lg-12');

        thumbnailImage = document.createElement('img');
        thumbnailImage.setAttribute('class', 'blog-image');
        if("images" in blog.items[x]){
            thumbnailImage.setAttribute('src', blog.items[x].images[0].url);
        }
        itemImageDiv.appendChild(thumbnailImage);
        item.appendChild(itemImageDiv);
        
        blogTitle = document.createElement('div');
        blogTitle.setAttribute('class', 'blog-title');
        blogTitle.innerHTML = blog.items[x].title;
        item.appendChild(blogTitle);

        blogSummary = document.createElement('div');
        blogSummary.setAttribute('class', 'blog-summary');
        blogSummary.innerHTML = blog.items[x].content.substring(0, 200);
        item.appendChild(blogSummary);

        canvas.appendChild(item);

    }
    
}

//console.log(blog);