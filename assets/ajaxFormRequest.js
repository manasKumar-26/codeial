{
    let createPost=function(){
        let newPostForm=$('#feedFormPost');
        newPostForm.submit(function(e){
            e.preventDefault();
            $.ajax({
                type:'post',
                url:'/posts',
                data:newPostForm.serialize(),
                success:function(data){
                   let newPost=newPostDom(data.data.post,data.curuser);   
                   $('#feedContainer').prepend(newPost);  
                   newPostForm.value="";
                },
                error:function(error){
                    console.log(error.responseText);
                }
            });
        });

    }
    let newPostDom=(p,name)=>{
        return $(`<div class="flex-c">
            <div class="flexr">
                <div><h5>${name}</h5></div>
                <div><small>${ p.createdAt.toString().substring(0,10)}</small></div>
            </div>
            <div class="jumbotron flexr colorStyle">
                ${p.content}
                    <div>
                        <a href="/posts/delete/?id=${p._id}"><i class="far fa-trash-alt"></i></a>
                    </div>
            </div>
        </div>
        <form action="/posts/create-comment" method="POST">
            <div class="input-group input-group-sm mb-3">
                <input type="text" class="form-control" placeholder="Type the Comment.." name="content">
                <input type="hidden" class="form-control"  name="post" value="${p._id}">
                <div class="input-group-append">
                <button class="btn btn-success" type="submit">Comment</button>
                </div>
            </div>
        </form>
        <div id="hrlength"></div>`)
    }
    createPost();
}
