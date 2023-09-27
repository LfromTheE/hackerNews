const container = document.getElementById('root');
let ajax = new XMLHttpRequest();
const content = document.createElement('div');
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json'
const CONTENTS_URL ='https://api.hnpwa.com/v0/item/@id.json'


ajax.open('GET',NEWS_URL, false)
ajax.send();

const newsFeed = JSON.parse(ajax.response);
const ul= document.createElement('ul');

window.addEventListener('hashchange',function() {
    const id =location.hash.substring(1);
    const title = document.createElement('h1');

    content.appendChild(title);

    ajax.open('GET',CONTENTS_URL.replace('@id',id),false)
    ajax.send();

    const newsContent =JSON.parse(ajax.response);

    title.innerHTML = newsContent.title
})


for(let i=0; i<10; i++){
    const a =document.createElement('a');
    const li= document.createElement('li');

    a.href =`#${newsFeed[i].id}`
    a.innerHTML=`${newsFeed[i].title}(${newsFeed[i].comments_count})`;

    li.appendChild(a);
    ul.appendChild(li);
}
container.appendChild(ul);
container.appendChild(content);
