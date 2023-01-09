// method --> oj
// function --> (window, global)

const video = {
    tittle: 'a',
    tags: ['a', 'b', 'c'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this.tittle, tag);
        }, this);
    }
};
video.showTags();



// const video = {
//     tittle: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags(){
//         const self = this;
//         this.tags.forEach(function(tag){
//             console.log(this.tittle, tag);
//         },.bind(this));
//     }
// };
// video.showTags();


// const video = {
//     tittle: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags(){
//         this.tags.forEach(tag=> {
//             console.log(this.tittle, tag);
//         });
//     }
// };
// video.showTags();