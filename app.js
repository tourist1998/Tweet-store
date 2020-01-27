// variable
let tweet,removeBtn;
const tweet1=document.getElementById('form');


// addEventListener
eventlistener();
function eventlistener() {
     document.getElementById('form').addEventListener('submit',addtocart);
}

// function
function addtocart(e) {
    e.preventDefault();
    tweet=document.getElementById('tweet').value;
    // Remove button 
    removeBtn=document.createElement('a');
    removeBtn.textContent='X';
    removeBtn.classList='remove-tweet';
    // create li item
    const li=document.createElement('li');
    li.textContent=tweet;
    li.appendChild(removeBtn);
    let fun1=document.getElementById('tweet-list');
    console.log(fun1);
   fun1.appendChild(li);
    // add tweet to local storage
    
    local(tweet);
}
 
// delete tweet
document.getElementById('tweet-list').addEventListener('click',function(e) {
    if(e.target.classList.contains('remove-tweet')) {
        e.target.parentElement.remove();
    }
    // remove tweet from local storage .
    console.log(e.target.parentElement.textContent);
    remove(e.target.parentElement.textContent);
});

// add tweet to local storage
function local(tweet) {
    let tweets;
    let tweetlis=localStorage.getItem('tweets');
    if(localStorage.getItem('tweets')===null) {
        tweets=[];
    }
    else {
        tweets=JSON.parse(tweetlis);
    }
    tweets.push(tweet);
    localStorage.setItem('tweets',JSON.stringify(tweets));
}

document.addEventListener('DOMContentLoaded',localload);
// load back item that is in Local storage
function localload() {
    let tweets=JSON.parse(localStorage.getItem('tweets')); // getting array of string 
    tweets.forEach(function(tweet){
        // creating list item and X with it and append it in similar way that we have done in above example .
        let removeBtn=document.createElement('a');
        removeBtn.textContent='X';
        removeBtn.classList='remove-tweet';
        // create li item
        const li=document.createElement('li');
        li.textContent=tweet;
        li.appendChild(removeBtn);
        let fun1=document.getElementById('tweet-list');
        fun1.appendChild(li);
    });
}


// function to remove element from local storage 
function remove(tweet) {
    let deletetweet=tweet.substring(0,tweet.length-1);
    console.log(deletetweet);
    let tweets=JSON.parse(localStorage.getItem('tweets'));
    console.log(tweets);
    tweets.forEach(function(tweetls,index) {
        if(deletetweet === tweetls) {
            console.log(tweetls);
           // splice method is used to delete element from array 
            tweets.splice(index,1);  // Here 1 specify number of element to be deleted.
        }
    });
    localStorage.setItem('tweets',JSON.stringify(tweets));
}