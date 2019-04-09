import items from "../data"

export let getProducts = () => new Promise((resolve, reject) => {
   if (items) {
      setTimeout(()=>{
         resolve(items.posts)
      }, 500)
       
   } else {
       reject("No products available")
   }
});
