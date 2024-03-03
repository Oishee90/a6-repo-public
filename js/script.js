const fetchData = async () => {
    const res = await fetch(` https://openapi.programming-hero.com/api/retro-forum/posts`);
    const data = await res.json();
    const post = data.posts;
    displayPost(post);
}
const loadPost = async (categoryName) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${categoryName}`);
    const data = await res.json();
    const post = data.posts;
    displayPost(post);
}

const displayPost = post => {;
    const postContainer = document.getElementById('lets-discuss');
    postContainer.textContent = ''
    post.forEach(item => {
        // console.log(item);
        
        const postCard = document.createElement('div');
        postCard.classList = `rounded-lg bg-violet-100`
        postCard.innerHTML = ` 
        <div class="flex flex-col md:flex-row lg:flex-row gap-5 p-8">
        <!-- active section -->
        <div>
        <div class="avatar relative ">
          <div class="w-20 h-20 rounded-2xl bg-slate-400  ">
           <img src="${item.image}" alt="">
            <div id ='bedge' class="absolute top-[-5px] right-[-5px]">
            ${item.isActive ? '<div class="badge badge-success border-white border-solid border-2 badge-md"></div>' : '<div class="badge badge-error border-white border-solid border-2 badge-md"></div>'}</div>
          </div>
        </div>
      </div>
        <!-- tittle section  -->
        <div class="flex  flex-col">
          <div class="flex flex-row gap-5 mb-3 font-inter text-sm font-medium text-[#12132D80]"><p><span>${item.id}</span> ${item.category}</p><p> Author : ${item.author.name}</p></div>
          <div class="mb-3 font-mulish text-base lg:text-xl font-bold text-[#12132D]"><h1>${item.title}</h1></div>
          <div class="mb-3 font-inter text-[#12132D99] text-base "><p>${item.description}</p></div>
          <hr class="h-0 border-dashed bg-violet-400">
          <div class="flex flex-row justify-between gap-4 lg:items-center mt-3">
            <div class="flex flex-row gap-6 pr-4 items-center ">
              <div class="flex flex-row gap-2"><img src="images/massage.svg" alt=""> <p>${item.comment_count}</p></div>
              <div class="flex flex-row gap-2"><img src="images/eye.svg" alt=""> <p>${item.comment_count}</p></div>
              <div class="flex flex-row gap-2 "><img src="images/time.svg" alt=""> <p>${item.posted_time}<span>min</span></p></div>
            </div>

            <div><button><img src="images/btn-msg.svg" alt="" srcset=""></button></div>


          </div>
        </div>
        <!-- tittle sectio end -->
        </div>`;
        postContainer.appendChild(postCard);
    })

   
}
const latestData = async () => {
    const res = await fetch(` https://openapi.programming-hero.com/api/retro-forum/latest-posts`);
    const data = await res.json();
    displayLatest(data);
}
const displayLatest = data => {
    const latestContainer = document.getElementById('latest-section')
    data.forEach(card => {
       
        console.log(card);
        const latestCard = document.createElement('div');
        latestCard.classList=`card  bg-base-100 shadow-xl border border-gray-400 rounded-3xl`;
        latestCard.innerHTML = `
        <figure class="px-10 pt-10">
        <img src="${card.cover_image}" alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body">
        <div class="flex flex-row gap-2"><img src="images/date.svg" alt=""> <p class="font-mulish text-[#12132D99] mb-2">29 January 2024</p></div>
        <p class="font-mulish text-[#12132D] font-extrabold mb-2">${card.title}</p>
        <p class="font-mulish text-[#12132D99] mb-2">${card.description}</p>
        <div class="flex flex-row gap-5 items-center">
          <!-- avatar name -->
          <div class="avatar">
            <div class="w-12 h-12 rounded-full">
              <img src="${card.profile_image}" />
            </div>
          </div>
          <!-- avatar details -->
          <div class="flex flex-col ">
          <h1 class="text-[#12132D] font-mulish font-bold text-lg">${card.author.name}</h1>
          <p class="font-mulish text-[#12132D99]">Unknown</p>
          </div>
            <!-- avatar details End-->
        </div>
      </div>
        `;
        latestContainer.appendChild(latestCard)
    
    })
    
}
const handleSearch = ()=>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPost(searchText);
}



window.addEventListener('DOMContentLoaded', function() {
    fetchData();
  });
  latestData()
