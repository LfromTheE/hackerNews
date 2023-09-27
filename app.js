const container = document.getElementById('root');
let ajax = new XMLHttpRequest();
const content = document.createElement('div');
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json'
const CONTENTS_URL ='https://api.hnpwa.com/v0/item/@id.json'

getData = (url)=>{
    ajax.open('GET',url, false)
    ajax.send();
    
    return JSON.parse(ajax.response)
}


const newsFeed = getData(NEWS_URL);
const ul= document.createElement('ul');

window.addEventListener('hashchange',function() {
    const id =location.hash.substring(1);
    const title = document.createElement('h1');

    content.appendChild(title);
    const newsContent =getData(CONTENTS_URL.replace('@id',id));

    title.innerHTML = newsContent.title
})


for(let i=0; i<10; i++){
    const a =document.createElement('a');
    const li= document.createElement('li');
    const div = document.createElement('div')

    div.innerHTML=
    `
    <li>
        <a href="#${newsFeed[i].id}">
        ${newsFeed[i].title}(${newsFeed[i].comments_count})</a>
    </li>
    `
    ul.appendChild(div);
}
container.appendChild(ul);
container.appendChild(content);
