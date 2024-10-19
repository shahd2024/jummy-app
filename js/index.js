/// <reference types="../@types/jquery" />

   
    $(window).on('load',()=>{
         $('.loader').fadeOut(2000,function(){
        $('.loading').slideUp(1000,function(){
            $('body').css('overflow','auto')
            $('.loading').remove();
          

        })
    })
    })


$('.nav-icons .close-icon i').on('click',function(){


    $('.naves .nav-contentes').animate({width:'toggle' ,margin:'toggle'},1000 );

  
 
    
})
// -----------------------animation------------------------
let specificMeal;
async function allMeals(){
    let myHttp=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
       let res=await myHttp.json();
     
     let All=res.meals;
     let cartona=''
      for(let i=0; i<All.length; i++){
      cartona+=` <div class="col-md-3 specific" id="${All[i].idMeal}">
                   <div class="meal position-relative">
                    <img class="w-100" src="${All[i].strMealThumb}" alt="">
                    <div class="meal-layer   d-flex align-items-center">
                        <h3 class="ps-2">${All[i].strMeal}</h3>
                    </div>

                   </div>
                </div>`
      }
      document.getElementById('demo').innerHTML=cartona;
      specificMeal=document.querySelectorAll('.specific');
      for(let x=0;x<specificMeal.length;x++){
        specificMeal[x].addEventListener('click',function(){
        let title= specificMeal[x].getAttribute("id");
        console.log(title);
      
        specific(title);
        
        })
      }
      
    
    
        
}

allMeals();
async function specific(data){
    let myHttp=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data}`);
    let res=await myHttp.json();
    console.log(res.meals[0]);
    let all=res.meals[0];
  
    
    document.querySelector('.home').classList.add('d-none');
    document.querySelector('.search-section').classList.replace('d-block','d-none');
    document.querySelector('.meal-bycateg').classList.replace('d-block','d-none');
    document.querySelector('.count-meal').classList.replace('d-block','d-none');
    document.querySelector('.ingredient-smeal').classList.replace('d-block','d-none');
    document.querySelector('.contact').classList.replace('d-block','d-none');
    document.querySelector('.category-section').classList.replace('d-block','d-none');
    document.querySelector('.sp').classList.replace('d-none','d-block');
    displaySpecific(all);
    

 


}
async function displaySpecific(all) {
    let count='';
    for (let index =1;index<=20;index++) {
        let ingredient = all[`strIngredient${index}`];
        if (ingredient) {  
            count += `<li class="alert alert-info p-1 m-2">${ingredient}</li>`;
          }
      
        
    }
    let cartona = `
     <div class="col-md-4">
                        <img class="w-100 rounded-3" src="${all.strMealThumb}" alt="" />
                         <h2>${all.strMeal}</h2>
                      </div>
                      <div class="col-md-8">
                       <h2>instruction</h2>
                       
                       <p>${all.strInstructions}</p>
                       <div class="sp-count d-flex">
                        <span class="fs-3">Area:</span>
                         <h3 class="pt-1">${all.strArea}</h3>
                       </div>
                      <div class="sp-categ d-flex">
                        <span class=" fs-3">Category :</span>
                         <h3 class="pt-1">${all.strCategory}</h3>
                      </div>
                      
                        <h3>Recipes:</h3>
                        
                          <ul class=" list-unstyled d-flex g-3 flex-wrap ">
                         
                            ${count}
                          </ul>
                      
                       <h3 >Tags:</h3>
                       <a class=" btn btn-success" href="${all.strSource}" target="_blank">source</a>
                      
                        <a href="${all.strYoutube}" target="_blank" class=" btn btn-danger">youtube</a>

                      </div>`


document.getElementById("demo-8").innerHTML = cartona;
    
}










 let nsearch=document.getElementById('nsearch');
 nsearch.addEventListener('input',function(){
    let mealName=nsearch.value;
    console.log(nsearch.value);
     getMeal(mealName)
    
 })
 async function getMeal(data){
    let myHttp=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${data}`);
    let res=await myHttp.json();
    let All=res.meals;
    console.log(All);
    
    let cartona=''
     for(let i=0; i<All.length; i++){
     cartona+=` <div class="col-md-3 specific" id="${All[i].idMeal}">
                  <div class="meal position-relative">
                   <img class="w-100" src="${All[i].strMealThumb}" alt="">
                   <div class="meal-layer   d-flex align-items-center">
                       <h3 class="ps-2">${All[i].strMeal}</h3>
                   </div>

                  </div>
               </div>`
     }
     document.getElementById('demo-1').innerHTML=cartona;
   
    specificMeal=document.querySelectorAll('.specific');
    for(let x=0;x<specificMeal.length;x++){
      specificMeal[x].addEventListener('click',function(){
      let title= specificMeal[x].getAttribute("id");
      console.log(title);
      specific(title);
      
      })
    }
        
 }


 let lsearch=document.getElementById('lsearch');
 lsearch.addEventListener('input',function(){
    let mealLetter=lsearch.value;
    console.log(lsearch.value);
     getMeal(mealLetter);
    
 })
 async function getMealLetter(ele){
    let myHttp=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${ele}`);
    let res=await myHttp.json();
    let All=res.meals;
    console.log(All);
    
    let cartona=''
     for(let i=0; i<All.length; i++){
     cartona+=` <div class="col-md-3 specific" id="${All[i].idMeal}">
                  <div class="meal position-relative">
                   <img class="w-100" src="${All[i].strMealThumb}" alt="">
                   <div class="meal-layer   d-flex align-items-center">
                       <h3 class="ps-2">${All[i].strMeal}</h3>
                   </div>

                  </div>
               </div>`
     }
     document.getElementById('demo-1').innerHTML=cartona;
     specificMeal=document.querySelectorAll('.specific');
      for(let x=0;x<specificMeal.length;x++){
        specificMeal[x].addEventListener('click',function(){
        let title= specificMeal[x].getAttribute("id");
        console.log(title);
        specific(title);
        
        })
 }
}
 document.getElementById('search').addEventListener('click',function(){
   
    $('.naves .nav-contentes').animate({width:'toggle' ,margin:'toggle'},1000 );
    document.querySelector('.home').classList.add('d-none');
    document.querySelector('.search-section').classList.replace('d-none','d-block');
    document.querySelector('.category-section').classList.add('d-none');
    document.querySelector('.meal-bycateg').classList.add('d-none');
    document.querySelector('.meals-area').classList.replace('d-block','d-none');
    document.querySelector('.count-meal').classList.replace('d-block','d-none');
    document.querySelector('.all-ingredients').classList.add('d-none');
    document.querySelector('.ingredient-smeal').classList.add('d-none');
    document.querySelector('.contact').classList.replace('d-block','d-none');
    document.querySelector('.sp').classList.add('d-none');
    console.log('react');
    
 })

    document.getElementById('category').addEventListener('click',function(){
        $('.naves .nav-contentes').animate({width:'toggle' ,margin:'toggle'},1000 );
        document.querySelector('.home').classList.add('d-none');
        document.querySelector('.search-section').classList.replace('d-block','d-none');
        document.querySelector('.category-section').classList.replace('d-none','d-block');
        document.querySelector('.meal-bycateg').classList.add('d-none');
        document.querySelector('.meals-area').classList.replace('d-block','d-none');
        document.querySelector('.count-meal').classList.replace('d-block','d-none');
        document.querySelector('.all-ingredients').classList.add('d-none');
        document.querySelector('.ingredient-smeal').classList.add('d-none');
        document.querySelector('.contact').classList.replace('d-block','d-none');
        document.querySelector('.sp').classList.replace('d-block','d-none');
        console.log('vue');
        
       
        allCategories();
    })
    async function allCategories(){
        let myData=await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        let rest=await myData.json();
        console.log(rest.categories);
    let All=rest.categories
    let cartona=''
     for(let i=0; i<All.length; i++){
     cartona+=`  <div class="col-md-3 m-cate ">
              <div class="meal position-relative py-3">
 <img class="w-100" src="${All[i].strCategoryThumb}" alt="">
 <div class="meal-layer   d-flex align-items-center flex-column text-center pt-2 ">
       <h3 class="ps-2">${ All[i].strCategory}</h3>  
       <P >${All[i].strCategoryDescription}</P>                                     
</div>                  
  </div> 
                    </div>`
     }
     document.getElementById('demo-2').innerHTML=cartona;
     
     let categList=document.querySelectorAll('.m-cate');
     for(let x=0;x<categList.length;x++){
        categList[x].addEventListener('click',()=>{
       console.log('ok');
       let categoryTitle = categList[x].querySelector('h3').innerText;
       document.querySelector('.category-section').classList.replace('d-block','d-none');
        document.querySelector('.meal-bycateg').classList.replace('d-none','d-block');
       
       mealCateg(categoryTitle);
          
        })
     }
 }
 async function mealCateg(data){
    let myData=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${data}`);
    let rest=await myData.json();
    console.log('allah');
    
    console.log(rest.meals);
    let All=rest.meals;
     let cartona=''
 for(let i=0; i<All.length; i++){
 cartona+=` <div class="col-md-3 specific" id="${All[i].idMeal}">
                  <div class="meal position-relative">
                   <img class="w-100" src="${All[i].strMealThumb}" alt="">
                   <div class="meal-layer   d-flex align-items-center">
                       <h3 class="ps-2">${All[i].strMeal}</h3>
                   </div>

                  </div>
               </div>`
 }
 document.getElementById('demo-3').innerHTML=cartona;
 specificMeal=document.querySelectorAll('.specific');
 for(let x=0;x<specificMeal.length;x++){
   specificMeal[x].addEventListener('click',function(){
   let title= specificMeal[x].getAttribute("id");
   console.log(title);
   specific(title);
   
   })
}
 }


// document.getElementById('category').addEventListener('click',function(){
//     // $('.naves .nav-contentes').animate({width:'toggle' ,margin:'toggle'},1000 );
//     document.querySelector('.sp').classList.replace('d-block','d-none');
//     document.querySelector('.home').classList.add('d-none');
//     document.querySelector('.search-section').classList.add('d-none');
//     document.querySelector('.category-section').classList.replace('d-none','d-block');
//     document.querySelector('.meal-bycateg').classList.add('d-none');
//     document.querySelector('.meals-area').classList.replace('d-block','d-none');
//     document.querySelector('.count-meal').classList.replace('d-block','d-none');
//     document.querySelector('.all-ingredients').classList.add('d-none');
//     document.querySelector('.contact').classList.replace('d-block','d-none');
//     document.querySelector('.sp').classList.add('d-none');
//     // document.querySelector('.sp').classList.add('d-none');
//     console.log('offfff');
    


// })
document.querySelector('.meal-bycateg').addEventListener('click',function(){
    document.querySelector('.home').classList.add('d-none');
    document.querySelector('.search-section').classList.add('d-none');
    document.querySelector('.category-section').classList.replace('d-block','d-none');
    document.querySelector('.meals-area').classList.replace('d-block','d-none');
    document.querySelector('.count-meal').classList.replace('d-block','d-none');
    // document.querySelector('.meal-bycateg').classList.replace('d-none','d-block');

})
document.getElementById('area').addEventListener('click',()=>{
    $('.naves .nav-contentes').animate({width:'toggle' ,margin:'toggle'},1000 );
    document.querySelector('.home').classList.add('d-none');
    document.querySelector('.search-section').classList.add('d-none');
    document.querySelector('.category-section').classList.add('d-none');
    document.querySelector('.meal-bycateg').classList.add('d-none');
    document.querySelector('.meals-area').classList.replace('d-none','d-block');
    document.querySelector('.all-ingredients').classList.add('d-none');
    document.querySelector('.contact').classList.replace('d-block','d-none');
    document.querySelector('.sp').classList.add('d-none');
    console.log('llll');
    
    getAreas();
})
async function getAreas(){
    let myHttp=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    let res=await myHttp.json();
   
    console.log('area');
    console.log(res.meals);
    let All=res.meals;
    let cartona=''
    for(let i=0; i<All.length; i++){
    cartona+=` <div class="col-md-3 text-center text-light meal-byarea">
                        <i class="fa-solid fa-house-laptop "></i>
                        <h3>${All[i].strArea}</h3>
                    </div>`
    }
    document.getElementById('demo-4').innerHTML=cartona;
    let areaList=document.querySelectorAll('.meal-byarea');
    for(let x=0;x<areaList.length;x++){
        areaList[x].addEventListener('click',()=>{
        let araeTitle=areaList[x].querySelector('h3').innerText;
        document.querySelector('.meals-area').classList.replace('d-block','d-none');
        document.querySelector('.count-meal').classList.replace('d-none','d-block');

        console.log(araeTitle);
        
        getArea(araeTitle);

        })

    }

}
async function getArea(tel){
    let myHttp=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${tel}`);
    let res=await myHttp.json();
    console.log(res.meals);
    let All=res.meals;
    let cartona='';
    for(let i=0; i<All.length; i++){
        cartona+=` <div class="col-md-3 specific " id="${All[i].idMeal}">
                  <div class="meal position-relative">
                   <img class="w-100" src="${All[i].strMealThumb}" alt="">
                   <div class="meal-layer   d-flex align-items-center">
                       <h3 class="ps-2">${All[i].strMeal}</h3>
                   </div>

                  </div>
               </div>`
        }
        document.getElementById('demo-5').innerHTML=cartona;
        specificMeal=document.querySelectorAll('.specific');
        for(let x=0;x<specificMeal.length;x++){
          specificMeal[x].addEventListener('click',function(){
          let title= specificMeal[x].getAttribute("id");
          console.log(title);
          specific(title);
          
          })
        }
    

}
document.getElementById('ingredients').addEventListener('click',()=>{
    $('.naves .nav-contentes').animate({width:'toggle' ,margin:'toggle'},1000 );
    document.querySelector('.home').classList.add('d-none');
    document.querySelector('.search-section').classList.add('d-none');
    document.querySelector('.category-section').classList.add('d-none');
    document.querySelector('.meal-bycateg').classList.add('d-none');
    document.querySelector('.meals-area').classList.add('d-none');
    document.querySelector('.count-meal').classList.add('d-none');
    document.querySelector('.all-ingredients').classList.replace('d-none','d-block');
    document.querySelector('.contact').classList.replace('d-block','d-none');
    document.querySelector('.sp').classList.replace('d-block','d-none');
    allIngredients();
})
async function allIngredients(){
    let myHttp=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    let res=await myHttp.json();
    console.log(res.meals);
    let All=res.meals;
    let cartona=''
    for(let i=0; i < 20 && i < All.length; i++){
        let description = All[i].strDescription;
        let maxLength = 100; 
        
        
        if (description.length > maxLength) {
            description = description.substring(0, maxLength) + '...';
        }
    cartona+=`<div class="col-md-3 text-center inget">
                        <i class="fa-solid fa-drumstick-bite"></i>
                        <h3>${All[i].strIngredient}</h3>
                        <p>${description}}</p>
                    </div>`
    }
    document.getElementById('demo-6').innerHTML=cartona;
    let ingtMeal=document.querySelectorAll('.inget');
    for(let x=0;x<ingtMeal.length;x++){
        ingtMeal[x].addEventListener('click',function(){
            let ingtTitle=ingtMeal[x].querySelector('h3').innerText;
            document.querySelector('.search-section').classList.add('d-none');
            document.querySelector('.all-ingredients').classList.replace('d-block','d-none');
            document.querySelector('.ingredient-smeal').classList.replace('d-none','d-block');
            ingtForMeal(ingtTitle);

        })
    }
    
}
 async function ingtForMeal(mal){
    let myHttp=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${mal}`);
    let res=await myHttp.json();
    console.log(res.meals);
    
    let All=res.meals;
    let cartona=''
    for(let i=0; i<All.length; i++){
    cartona+=` <div class="col-md-3 specific" id="${All[i].idMeal}">
                 <div class="meal position-relative">
                  <img class="w-100" src="${All[i].strMealThumb}" alt="">
                  <div class="meal-layer   d-flex align-items-center">
                      <h3 class="ps-2 text-dark">${All[i].strMeal}</h3>
                  </div>

                 </div>
              </div>`
    }
    document.getElementById('demo-7').innerHTML=cartona;
    specificMeal=document.querySelectorAll('.specific');
    for(let x=0;x<specificMeal.length;x++){
      specificMeal[x].addEventListener('click',function(){
      let title= specificMeal[x].getAttribute("id");
      console.log(title);
      specific(title);
      
      })
    }


}


let names = document.getElementById('names');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let age = document.getElementById('age');
let pass = document.getElementById('pass');
let repass = document.getElementById('repass');


names.addEventListener('input', function() {
    validation(this);
    add(); 
});

email.addEventListener('input', function() {
    validation(this);
    add(); 
});

phone.addEventListener('input', function() {
    validation(this);
    add(); 
});

age.addEventListener('input', function() {
    validation(this);
    add(); 
});

pass.addEventListener('input', function() {
    validation(this);
    add(); 
    validatePasswordMatch(); 
});

repass.addEventListener('input', function() {
    validation(this);
    add(); 
    validatePasswordMatch(); 
});


function check() {
    return names.value !== '' && email.value !== '' && phone.value !== '' && age.value !== '' && pass.value !== '' && repass.value !== '';
}


function validation(element) {
    var regex = {
        names: /^[a-zA-Z]+$/, 
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
        phone: /^01[0125][0-9]{8}$/, 
        age: /^(1[01]?[0-9]|[1-9]?[0-9])$/, 
        pass: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,  
        repass: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 
    };

    
    if (regex[element.id].test(element.value)) {
        element.nextElementSibling.classList.replace('d-block', 'd-none'); 
        return true; 
    } else {
        element.nextElementSibling.classList.replace('d-none', 'd-block'); 
        return false; 
    }
}


function validatePasswordMatch() {
    if (pass.value !== repass.value) {
        repass.nextElementSibling.classList.replace('d-none', 'd-block'); 
        document.getElementById('sub').disabled = true; 
    } else {
        repass.nextElementSibling.classList.replace('d-block', 'd-none'); 
        document.getElementById('sub').disabled = false; 
    }
}


function add() {
    
    if (
        check() && 
        validation(names) && 
        validation(email) && 
        validation(phone) && 
        validation(age) && 
        validation(pass) && 
        validation(repass) && 
        pass.value === repass.value 
    ) {
        document.getElementById('sub').classList.remove('disabled'); 
        document.getElementById('sub').disabled = false; 
    } else {
        document.getElementById('sub').classList.add('disabled'); 
        document.getElementById('sub').disabled = true; 
    }
}
document.getElementById('contact').addEventListener('click',()=>{
    $('.naves .nav-contentes').animate({width:'toggle' ,margin:'toggle'},1000 );
    document.querySelector('.home').classList.add('d-none');
    document.querySelector('.search-section').classList.replace('d-block','d-none');
    document.querySelector('.category-section').classList.add('d-none');
    document.querySelector('.meal-bycateg').classList.add('d-none');
    document.querySelector('.meals-area').classList.replace('d-block','d-none');
    document.querySelector('.count-meal').classList.replace('d-block','d-none');
    document.querySelector('.all-ingredients').classList.add('d-none');
    document.querySelector('.ingredient-smeal').classList.add('d-none');
    document.querySelector('.contact').classList.replace('d-none','d-block');
    document.querySelector('.sp').classList.add('d-none');
    

})

                          