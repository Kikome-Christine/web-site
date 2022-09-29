const userPosts = [...document.querySelectorAll('.post-container .post')];
let popupPost = document.querySelector('.post-popup');
let closePopup = document.querySelector('.close-overLay');
let popupPostImg = document.querySelector('.post-container .post .post-img-container .img');

const edit = document.querySelector('#get');
const editProfile = document.querySelector('.box1');

userPosts.map(post =>{
    post.addEventListener('click', () =>{
        let img = post.querySelector('.post-img');
         popupPostImg.src = img.src;
        popupPost.classList.add('show');
    })
})
closePopup.addEventListener('click', () => popupPost.classList.remove('show'));


const openEditProfile = () => {
    editProfile.style.display = 'grid';
}
const closeEditProfile = (e) => {
    if (e.target.classList.contains('box1')) {
        editProfile.style.display = 'none';
    }
}
editProfile.addEventListener('click', closeEditProfile);

get.addEventListener('click', openEditProfile);




const removeSizeSelector = () => {
    fontSizes.forEach(size =>{
        size.classList.remove('active');
    })
}