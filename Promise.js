const fetchData = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const data = "Some data fetched";
            resolve(data);
        }, 2000);
    });
}


