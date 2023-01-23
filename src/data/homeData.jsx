import icon1 from '../img/home/fresh_pr.png';
import icon2 from '../img/home/skilled_chefs.png';
import icon3 from '../img/home/best_bar.png';
import icon4 from '../img/home/vegan_cuisine.png';
import icon5 from '../img/home/about-img-3.png';
import icon6 from '../img/home/about-img-4.png';
import TestiMonialSliderImg1 from '../img/home/testimonials-2.webp';
import Portfolio1 from '../img/home/restaurant-img-2.webp';
import Portfolio2 from '../img/home/restaurant-img-3.webp';
import Portfolio3 from '../img/home/restaurant-img-1.webp';
import blog1 from '../img/home/blog-1.webp'
import blog2 from '../img/home/blog-2.webp'
import blog3 from '../img/home/blog-3.webp'


const HomeSec =[
    // Home section 1 INDEX-1
    [
        
        {   
            icon:icon1,
            // title: 1,
            // details:2

        },
        {
            icon: icon2,
            // title:3,
            // details:4


        }
        ,
        {
            icon:icon3,
            // title: 5,
            // details:6

        }
        ,
        {
            icon:icon4,
            // title:7,
            // details:8

        }
    ],
    //Cart Index-2
    [
        {
            icon: icon5,
            title:"Speciallst",
            details:"bled it to make a type specimen boIt has survived not amnits."
        },
        {
            icon: icon6,
            title:"Restaurant",
            details:"bled it to make a type specimen boIt has survived not amnits."
        }
    ],
    // ________________________________________________Diner

    [
        {
            id:5,
            catagory: "Dinner",
            img:"https://images.food52.com/Pas9NLxV8mQe0xExEJqe5qq7LXg=/1200x1200/f8c8d4df-4b8d-4956-bda1-21bc1c76fdf4--2021-0512_sponsored_perdue_yakitori-chicken-skewers_recipe_not-branded_3x2_ty-mecham.jpg",
            price:45
        },
        {
            id:6,
            catagory: "Dinner",
            img:"https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Pasta-Napolitana_EXPS_FT20_244521_F_0226_1.jpg",
            price:30
        },
        {
            id:7,
            catagory: "Dinner",
            img:"https://sweetpeaskitchen.com/wp-content/uploads/2022/09/Smoked-Sausage-and-Potato-Skillet-6-edited-scaled.jpg",
        
            price:55
        },
        {
            id:8,
            catagory: "Dinner",
            img:"https://www.recipetineats.com/wp-content/uploads/2020/01/Fried-Chicken_2-SQ.jpg",
        
            price:55
        }
        ,
        {
            id:9,
            catagory: "Dinner",
            img:"https://kitchenswagger.com/wp-content/uploads/2019/06/grilled-filet-mignon1.jpg",
        
            price:47
        },
        {
            id:10,
            catagory: "Dinner",
            img:"https://assets.bonappetit.com/photos/5ea8f0df16738800085ad5d2/1:1/w_2560%2Cc_limit/Chicken-Parmesean-Recipe-Lede.jpg",
        
            price:55
        },
        {
            id:11,
            catagory: "Dinner",
            img:"https://www.anediblemosaic.com/wp-content/uploads//2017/02/beef-carnitas-recipe-featured-image.jpg",
            price:25
        }
    ],
    // Index 3 ________________________________________________Lunch 
    [
        {
            id:23,
            catagory: "Lunch",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4etmvqqNVznNHkWTz1WrwGZvR3fgxypxxQg&usqp=CAU",
            price:25
        },
        {
            id:24,
            catagory: "Lunch",
            img:"https://d1e3z2jco40k3v.cloudfront.net/-/media/project/oneweb/mccormick-us/mccormick/recipe-images/weeknight-pepper-steak-recipe-1376x774.webp?rev=3338b2ea6f05443c9f2dfb04d3a024c5&vd=20220914T205657Z&hash=AD84FCD72027541E5FD715562F5D33E9",
            price:20
        },
        {
            id:25,
            catagory: "Lunch",
            img:"https://static.onecms.io/wp-content/uploads/sites/44/2020/01/29/7690850.jpg",   
            price:35 
        },
        {
            id:26,
            catagory: "Lunch",
            img:"https://i.pinimg.com/originals/68/94/40/689440c41ddb6157a82b3bcf8d5b6a87.jpg",
            price:35
        },
        {
            id:27,
            catagory: "Lunch",
            img:"https://simple-veganista.com/wp-content/uploads/2016/05/zucchini-sweet-potato-.jpg",
        
            price:35
        }
    ],

    // Index4 ________________________________________________Branch

    [
        {
            id:28,
            catagory: "Breakfast",
            img:"https://tastykitchen.com/recipes/wp-content/uploads/sites/2/2010/06/CapreseOmeletFinalLS-800x5331.jpg",
            price:85
        },
        {
            id:29,
            catagory: "Breakfast",
            img:"https://thegoodheartedwoman.com/wp-content/uploads/2022/01/monte-cristo-sandwich.jpg",
        
            price:25
        },
        {
            id:30,
            catagory: "Breakfast",
            img:"https://www.kyleecooks.com/wp-content/uploads/2022/06/Lemon-Ricotta-Pancakes-3.jpg",
        
            price:55
        },
        {
            id:31,
            catagory: "Breakfast",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfHc9R_CDKtSCKLkFcdN_GvaXR9QRrvL_pAQ&usqp=CAU",
            price:95
        },
        {
            id:32,
            catagory: "Breakfast",
            img:"https://www.persnicketyplates.com/wp-content/uploads/2014/10/ham-potato-breakfast-casserole-for-two-SQUARE.jpg", 
            price:35
        }
    ],

    // Index5________________________________________________Desert

    [
        {
            id:57,
            catagory: "Dessert",
            img:"http://images.kglobalservices.com/www.kelloggs.com.au/en_au/recipe/recipe_5274222/recip_img-5274474_kelloggs-tiramisu.jpg",
        
            price:26
        }
        ,
        {
            id:58,
            catagory: "Dessert",
            img:"https://reneenicoleskitchen.com/wp-content/uploads/2021/11/Pumpkin-Spice-Creme-Brulee-Image-1.jpg",
        
            price:17
        }
        ,
        {
            id:59,
            catagory: "Dessert",
            img:"https://bakeitwithlove.com/wp-content/uploads/2020/03/Apple-Blackberry-Crumble-sq.jpg",
        
            price:5
        },
        ,{
            id:61,
            catagory: "Dessert",
            img:"https://sugarspunrun.com/wp-content/uploads/2020/10/chocolate-cheesecake-recipe-1-of-1.jpg",
        
            price:55
        },
        {
            id:62,
            catagory: "Dessert",
            img:"https://monasterykitchen.org/wp-content/uploads/15195777696_9ccc9e98f4_o.jpg",
        
            price:35
        },
        {
            id:64,
            catagory: "Dessert",
            img:"https://images.squarespace-cdn.com/content/v1/5dd0183c6d840e3bdf1f0566/b3752e96-8b73-42e3-ae07-e12d14c673fc/Cherry+Strudel+37.jpg?format=1000w",
        
            price:35
        }
    ],
    //Index6 ________________________________________________Wine

    [
        {
            id:43,
            catagory: "Drink",
            img:"https://static.scientificamerican.com/sciam/cache/file/7C0BADB7-D030-4E4E-BE715FB20458C51E.jpg",
            price:25
        },
        {
            id:44,
            catagory: "Drink",
            img:"https://www.allrecipes.com/thmb/Wh0Qnynwdxok4oN0NZ1Lz-wl0A8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/9428203-9d140a4ed1424824a7ddd358e6161473.jpg",
            price:35
        },
        {
            id:45,
            catagory: "Drink",
            img:"https://coffeeaffection.com/wp-content/uploads/2021/02/does-a-cappuccino-have-caffeine.jpg",
            price:55
            
        },
        {
            id:46,
            catagory: "Drink",
            img:"https://www.alphafoodie.com/wp-content/uploads/2022/03/How-to-Make-Grape-Juice-Square-500x500.jpeg",
            price:55
        }   
    ],
    // Index7 BTN Menu tab
    [
        {
            allBtn:"allBtn1",
            className:'btn color-w bg-gl',
            title:"Dinner"
        }
        ,{
            allBtn:"allBtn2",
            className:'btn color-w bg-gl',
            title:"Lunch"
        },
        {
            allBtn:"allBtn3",
            className:'btn color-w bg-gl ',
            title:"Branch"
        },{
            allBtn:"allBtn4",
            className:'btn color-w bg-gl ',
            title:"Dessert"
        },
        {
            allBtn:"allBtn3",
            className:'btn color-w ',
            title:"Wine"
        }
    ],
    // Index 8 TestiMonialSlider
    [
        {
            name: "Donatella Nobatti" , 
            work: 'SEO-Founder',
            img: TestiMonialSliderImg1,
            details: "There are many variations of passages of Lorem ipsum availableatims thajority have suffered alteration in some form by injected randomised words which don't look even sligh going to use a passage."
            },
            {
                name: "Donatella Nobatti" , 
                work: 'SEO-Founder',
                img: TestiMonialSliderImg1,
                details: "There are many variations of passages of Lorem ipsum availableatims thajority have suffered alteration in some form by injected randomised words which don't look even sligh going to use a passage."
                }
    ],
    //index 9 Home section 7  Personal area
    [
        {
            img:Portfolio1,
            name: 'Mary Christmans',
            detail: 'Assistent',
            class:'mary w-auto h-auto'
        },
        {
            img:Portfolio2,
            name: 'Sharon Needles',
            detail: 'Ceo-Founder',
            class: 'sharon w-auto h-auto'
        },
        {
            img:Portfolio3,
            name: 'Ash Wednesday',
            detail: 'Chef',
            class:'ash w-auto h-auto'
        },
        {
            img:Portfolio2,
            name: 'Sharon Needles',
            detail: 'Ceo-Founder',
            class:'sharon2 w-auto h-auto'
        },
       ],
    //    Index 10
    [
        {
            img: blog1,
            author:'By Admin /',
            type:' Restaurant',
            title:'Elegant Dessert 10Tips How To Make It At Home',

        },
        {
            img: blog2,
            author:'By Admin /',
            type:'  News & Tips',
            title:'Turkish Soup With Species Dish Of The Week',

        },
        {
            img: blog3,
            author:'By Admin /',
            type:'  Food & Drink',
            title:'Ideal Cocktails From Our Barmen For Perfect Mood',

        }
    ]
  
]


export default HomeSec

