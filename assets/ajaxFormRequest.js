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
                    console.log(data.curuser)
                    console.log(data.data.post)
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
                <div><small>${name}</small></div>
                <div><small>${ p.createdAt.toString().substring(0,10)}</small></div>
            </div>
            <div class="jumbotron flexr colorStyle">
                ${ p.content }
                    <div>
                        <a href="/posts/delete/?id=${ p.id}"><i class="far fa-trash-alt"></i></a>
                    </div>
            </div>
        </div>
        <div id="hrlength"></div>`)
    }
    createPost();
}
