'use strict';

let articles = []; //empty array to be pushed into

function Article (rawDataObj) { //contructor function Article with a parameter of rawDataObj
    this.author = rawDataObj.author; //(this) is in reference to the above function, grabs author from the array rawDataObj
    this.authorUrl = rawDataObj.authorUrl;
    this.title = rawDataObj.title;
    this.category = rawDataObj.category;
    this.body = rawDataObj.body;
    this.publishedOn = rawDataObj.publishedOn;
}

Article.prototype.toHtml = function() {//prototype method that will render whatever is in the parameters into the html. Combined Atricle constructor to toHTML by the means of a prototype method

    let template = Handlebars.compile($('#article-template').html()); //storing template as handlebars that compiles the query selection of the id article-template

    this.daysAgo = parseInt((new date() -new Date(this.publishedOn)) /60/60/24/1000); //today's date minus the publish date
    this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)'; //use back-ticks for template literals. First one after question mark is expression true, second is expression false

    if(this.publishedOn) { //
        this.publishStatus = `published ${this.daysAgo} days ago`;
    } else { 
        this.publishStatus = '(draft)';
    }
    return template(this);
};

rawDataObj.sort((a,b) => (new Date(b.publishedOn)) - (new Date (a.publishedOn))); //

rawDataObj.forEach(articleObject => {
    articles.push(new Article(articleObject)); //making a new constructor with parameters of articleObject
});