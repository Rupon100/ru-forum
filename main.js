

const loadAllPosts = (category) => {
    fetch(`https://openapi.programming-hero.com/api/retro-forum/posts${category ? `?category=${category}` : ""}`)
    .then(response => response.json())
    .then(data =>  {
        //console.log(data.posts)
        showAllPosts(data.posts)
    })
    .catch(error => {
        console.error("Probelm with fetch function!", error);
    })
}



const handleSearch = () => {
    const searchText = document.getElementById('input').value;
    loadAllPosts(searchText);
}

const showAllPosts = (posts) => {
    //console.log(posts)
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = '';

    posts.forEach((post) => {
       // console.log(post)
        const div = document.createElement('div');

        div.classList.add('flex', 'gap-4','justify-between', 'grid-cols-1', 'sm:grid-cols-2', 'md:grid-cols-3', 'lg:grid-cols-4');

        div.innerHTML = `
         
        <div class="max-w-[600px] flex flex-col justify-center items-center border py-4 px-8 rounded-xl border-gray-700 m-2">
            <div>
                <div id="" class="avatar ${post.isActive ? 'online' : 'offline'}">
                    <div class="w-16 rounded-full">
                      <img src=${post.image} />
                    </div>
                </div>
            </div>
            <div class="flex flex-col">
                <div class="flex gap-4">
                    <p class="text-lg text-gray-600"># ${post.category}</p>
                    <p class="text-lg text-gray-600">${post.author.name}</p>
                </div>
                <h2 class="text-2xl font-semibold">${post.title}</h2>
                <h4 class="text-lg text-gray-600">${post.description}</h4>
    
                <div class="divider"></div>
    
                <div class="flex justify-between items-center">
                    <div class="flex gap-4 justify-start">
                        <p class="flex flex-row  gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                            </svg>
                            <span id="messageCount">${post.comment_count}</span>
                        </p>
                        <p class="flex flex-row  gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <span id="viewCount">${post.view_count}</span> 
                        </p>
                        <p class="flex flex-row gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <span id="postDateCount">${post.posted_time}</span> 
                        </p>
                    </div>
                    <div onclick="markAsrRead('${post.description}', '${post.view_count}')" class="p-2 rounded-full bg-sky-400 cursor-pointer text-white">
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
                       </svg>
                    </div>
                     
                </div>
            </div>
        </div>
        `;
        postContainer.append(div);
    });
}

const markAsrRead = (des, viewCount) => {
    // console.log(des, viewCount)
    const markAsrReadContainer = document.getElementById('markContainer');
    const div = document.createElement('div');
    div.innerHTML = `
            
            <div class="bg-white rounded-lg p-4 flex gap-4 justify-between">
                <p>${des}</p>
                <p class="flex flex-row  gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <span id="viewCount">${viewCount}</span> 
                </p>
            </div>
    `;
    markAsrReadContainer.append(div);
    const countMArk = document.getElementById('markCount').textContent;
    let count = parseInt(countMArk);
    count++;
    document.getElementById('markCount').innerText = count;
    
}

loadAllPosts()
showAllPosts()






