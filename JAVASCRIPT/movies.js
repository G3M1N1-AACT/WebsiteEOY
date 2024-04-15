// JavaScript for dynamic header navigation links
document.addEventListener("DOMContentLoaded", function() {
    const pages = [
        {link:"index.html", text:"Home"},
        {link:"Characters.html", text:"Characters"},
        {link:"Games.html", text:"Games"},
        {link:"Story.html", text:"Story"},
    ];
    const navigation = document.querySelector('#navigation-list');
    pages.forEach(page => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = page.link;
        link.textContent = page.text; 
        listItem.appendChild(link);
        navigation.appendChild(listItem);
    });
});