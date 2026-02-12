//what is enum --- enum is set of contant values 
interface Blog{
    title:string,  
    body: string,
    imageUrl :string
}
function addBlog(role:string, blog:Blog):string{
    if(role == "user"){
        return "NOT AUTHORIZED"
    }

    return "BLOG ADDED SUCCESSFULLY"
   
    
}
addBlog("user",{title: "first blog" , body: "this is my first blog", imageUrl: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"})


console.log(Role2.user);
console.log(Role2.admin);
//we can use enum to avoid this type of error
//the error in this code is we can pass any string as role and it will not give us error but we want to restrict the role to only "user" and "admin"
enum Role{
    USER = "user",
    ADMIN = "admin"
}

addBlog(Role.USER,{title: "first blog" , body: "this is my first blog", imageUrl: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"})
