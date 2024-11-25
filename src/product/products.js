const products = [
    {
      id:"be0dcc20-9f27-4018-aa5e-2f0f5eb10513",
      product_name:"APC Shoes",
      product_group:"wearable",
      product_desc:"This is a shoes which is quite famous in india.",
      price:2999,
      discount:10,
      rating:3,
      image:"https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?s=2048x2048&w=is&k=20&c=q5PbZIu__xKIpwD9RiwCSn4ptSniWsD0GElqkCdsevM="
    }
    ,{
      id:"98a84c0a-1ce1-4d38-a80f-3db89de8e8b5",
      product_name:"HRK Round Flex",
      product_group:"wearable",
      product_desc:"This is a shoes which is quite famous in india.",
      price:4999,
      discount:20,
      rating:4,
      image:"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png"
    }
    ,{
      id:"1c7b68c6-95ca-48fe-988e-1fe3bd9484b8",
      product_name:"Shoes Sneakers Footwear",
      product_group:"wearable",
      product_desc:"This is a shoes which is quite famous in india.",
      price:6999,
      discount:15,
      rating:3,
      image:"https://cdn.pixabay.com/photo/2016/12/10/16/57/shoes-1897708_1280.jpg"
    }
    ,{
      id:"4f47987b-8dc4-4181-ab62-2cd22af742b2",
      product_name:"Shoes Sneakers Footwear",
      product_group:"wearable",
      product_desc:"This is a shoes which is quite famous in india.",
      price:5999,
      discount:40,
      rating:4,
      image:"https://cdn.pixabay.com/photo/2014/12/31/11/41/shoes-584850_1280.jpg"
    }
    ,{
      id:"b48fdcc2-1932-4080-a84b-ce0f79ac9e21",
      product_name:"Shoes Sneakers Footwear",
      product_group:"wearable",
      product_desc:"This is a shoes which is quite famous in india.",
      price:6999,
      discount:20,
      rating:4,
      image:"https://cdn.pixabay.com/photo/2021/10/11/18/56/shoes-6701631_1280.jpg"
    }
    ,{
      id:"b85a1066-b1f4-46b3-94a8-fefd6c64b998",
      product_name:"Shoes Sneakers Footwear",
      product_group:"wearable",
      product_desc:"This is a shoes which is quite famous in india.",
      price:4599,
      discount:10,
      rating:4,
      image:"https://cdn.pixabay.com/photo/2023/05/29/13/10/shoes-8026038_960_720.jpg"
    }
    ,{
      id:"3db94903-6531-42fa-a01a-8d44526d26aa",
      product_name:"Shoes Sneakers Footwear",
      product_group:"wearable",
      product_desc:"This is a shoes which is quite famous in india.",
      price:3999,
      discount:10,
      rating:4,
      image:"https://cdn.pixabay.com/photo/2016/06/03/17/35/shoes-1433925_1280.jpg"
    }
    ,{
      id:"7909bfa7-2cae-4a6c-b045-8eeb23cc8da4",
      product_name:"Work Boots footwear",
      product_group:"wearable",
      product_desc:"This is a shoes which is quite famous in india.",
      price:8999,
      discount:10,
      rating:4,
      image:"https://cdn.pixabay.com/photo/2019/04/17/10/17/work-boots-4133817_1280.jpg"
    }
    ,{
      id:"14c9945d-909a-4ef2-a20c-4e8a2465b67c",
      product_name:"Shoes Sneakers Footwear",
      product_group:"wearable",
      product_desc:"This is a shoes which is quite famous in india.",
      price:3999,
      discount:10,
      rating:4,
      image:"https://cdn.pixabay.com/photo/2014/12/31/11/41/shoes-584850_1280.jpg"
    }
    ,{
      id:"9c616f50-4508-493a-85fa-dfa925517db0",
      product_name:"Shoes Sneakers Footwear",
      product_group:"wearable",
      product_desc:"This is a shoes which is quite famous in india.",
      price:3999,
      discount:10,
      rating:4,
      image:"https://cdn.pixabay.com/photo/2017/09/15/13/28/black-shoes-2752226_960_720.jpg"
    }
    ,{
      id:"02292689-2b34-414c-9f0b-132d0c070d5a",
      product_name:"Shoes Sneakers Footwear",
      product_group:"wearable",
      product_desc:"This is a shoes which is quite famous in india.",
      price:3999,
      discount:10,
      rating:4,
      image:"https://cdn.pixabay.com/photo/2015/10/30/18/35/shoes-1014606_1280.jpg"
    }
    ,{
      id:"cb81f18a-6525-402f-9f2e-9f78407d0d8b",
      product_name:"Shoes Sneakers Footwear",
      product_group:"wearable",
      product_desc:"This is a shoes which is quite famous in india.",
      price:3999,
      discount:10,
      rating:4,
      image:"https://cdn.pixabay.com/photo/2014/11/14/19/57/sneakers-531172_1280.jpg"
    }
    ,{
      id:"702a0acf-df48-4048-8497-d9392b5869a1",
      product_name:"Shoes Sneakers Footwear",
      product_group:"wearable",
      product_desc:"This is a shoes which is quite famous in india.",
      price:3999,
      discount:10,
      rating:4,
      image:"https://cdn.pixabay.com/photo/2018/09/21/16/14/shoes-3693408_960_720.jpg"
    }
    ,{
      id:"83130bb5-87a5-439d-864d-14b870df620e",
      product_name:"Shoes Sneakers Footwear",
      product_group:"wearable",
      product_desc:"This is a shoes which is quite famous in india.",
      price:6889,
      discount:25,
      rating:4,
      image:"https://cdn.pixabay.com/photo/2021/03/08/12/06/oxford-shoes-6078951_960_720.jpg"
    }
    ,{
      id:"2d178cc2-551f-48b7-a2bb-d13f173de675",
      product_name:"Shoes Sneakers Footwear",
      product_group:"wearable",
      product_desc:"This is a shoes which is quite famous in india.",
      price:7699,
      discount:22,
      rating:4,
      image:"https://cdn.pixabay.com/photo/2022/10/08/17/04/shoes-7507418_1280.jpg"
    }
    ,{
      id:"0fcb8332-0d69-4b2d-808f-001d9cfcd237",
      product_name:"Shoes Sneakers Footwear",
      product_group:"wearable",
      product_desc:"This is a shoes which is quite famous in india.",
      price:7899,
      discount:30,
      rating:6,
      image:"https://cdn.pixabay.com/photo/2015/01/03/03/51/sandals-587185_960_720.jpg"
    }
    ,{
      id:"8f2b3ccd-6611-4cf7-b168-00b41e354837",
      product_name:"Shoes Sneakers Footwear",
      product_group:"wearable",
      product_desc:"This is a shoes which is quite famous in india.",
      price:3999,
      discount:10,
      rating:4,
      image:"https://cdn.pixabay.com/photo/2017/02/17/15/50/shoes-2074400_1280.jpg"
    }
    ,{
      id:"6bb4e715-f9da-4762-a97d-f801c2e1ad26",
      product_name:"Shoes Sneakers Footwear",
      product_group:"wearable",
      product_desc:"This is a shoes which is quite famous in india.",
      price:8999,
      discount:10,
      rating:5,
      image:"https://cdn.pixabay.com/photo/2016/09/21/12/21/wingtip-1684700_1280.jpg"
    }
    ,{
      id:"46f99d5f-b9ac-47c4-9b3a-2cbe5bfb29db",
      product_name:"Shoes Sneakers Footwear",
      product_group:"wearable",
      product_desc:"This is a shoes which is quite famous in india.",
      price:6499,
      discount:10,
      rating:3,
      image:"https://cdn.pixabay.com/photo/2018/10/13/05/23/shoe-3743507_1280.jpg"
    }
    ,{
      id:"908f445d-8094-4ea4-8317-35af92b52f44",
      product_name:"Shoes Sneakers Footwear",
      product_group:"wearable",
      product_desc:"This is a shoes which is quite famous in india.",
      price:7643,
      discount:15,
      rating:5,
      image:"https://cdn.pixabay.com/photo/2017/07/31/15/06/boot-2558324_1280.jpg"
    }
    ,{
      id:"4c1f708c-4b40-4244-93f7-397ac93ab110",
      product_name:"Shoes Sneakers Footwear",
      product_group:"wearable",
      product_desc:"This is a shoes which is quite famous in india.",
      price:5674,
      discount:20,
      rating:3,
      image:"https://cdn.pixabay.com/photo/2020/06/29/04/33/shoes-5351339_960_720.jpg"
    }
    ,{
      id:"2be074fa-1521-4a68-9b2a-0c4f1b4647a4",
      product_name:"Shoes Sneakers Footwear",
      product_group:"wearable",
      product_desc:"This is a shoes which is quite famous in india.",
      price:5699,
      discount:20,
      rating:5,
      image:"https://cdn.pixabay.com/photo/2015/07/05/23/28/shoes-832875_960_720.jpg"
    }
    ,{
      id:"313c2b85-abf7-40e1-993c-bc1844f9fe7e",
      product_name:"Shoes Sneakers Footwear",
      product_group:"wearable",
      product_desc:"This is a shoes which is quite famous in india.",
      price:3999,
      discount:10,
      rating:4,
      image:"https://cdn.pixabay.com/photo/2014/05/18/11/26/shoes-346986_960_720.jpg"
    }
    ,{
      id:"0b487626-e322-4f02-9e9f-0d61944d1346",
      product_name:"Shoes Sneakers Footwear",
      product_group:"wearable",
      product_desc:"This is a shoes which is quite famous in india.",
      price:5699,
      discount:15,
      rating:3,
      image:"https://cdn.pixabay.com/photo/2016/08/02/21/01/shoes-1565009_960_720.jpg"
    }
    ,{
      id:"9f376aa0-c78a-41ca-a8fb-2997e5298f18",
      product_name:"Shoes Sneakers Footwear",
      product_group:"wearable",
      product_desc:"This is a shoes which is quite famous in india.",
      price:2599,
      discount:10,
      rating:5,
      image:"https://cdn.pixabay.com/photo/2016/11/19/11/24/puma-1838735_960_720.jpg"
    }
    ,{
      id:"5bcf2302-0570-4044-bbf8-5c9bf70d4a3d",
      product_name:"Shoes Sneakers Footwear",
      product_group:"wearable",
      product_desc:"This is a shoes which is quite famous in india.",
      price:9999,
      discount:40,
      rating:4,
      image:"https://cdn.pixabay.com/photo/2015/11/23/14/17/shoes-1058419_960_720.jpg"
    }
    ,{
      id:"6f2e3740-9eb2-4002-92cc-4a8e3fc4a657",
      product_name:"Shoes Sneakers Footwear",
      product_group:"wearable",
      product_desc:"This is a shoes which is quite famous in india.",
      price:7899,
      discount:15,
      rating:3,
      image:"https://cdn.pixabay.com/photo/2016/09/21/12/23/wingtip-1684702_960_720.jpg"
    }
    ,{
      id:"75d2da9c-b1de-4d0a-849b-b9dc6657419e",
      product_name:"Shoes Sneakers Footwear",
      product_group:"wearable",
      product_desc:"This is a shoes which is quite famous in india.",
      price:2760,
      discount:20,
      rating:4,
      image:"https://cdn.pixabay.com/photo/2018/01/24/09/15/a-couple-of-3103481_960_720.jpg"
    }
    ,{
      id:"f994f25e-26bc-4c1d-9b37-f1f855d394bb",
      product_name:"Shoes Sneakers Footwear",
      product_group:"wearable",
      product_desc:"This is a shoes which is quite famous in india.",
      price:4599,
      discount:5,
      rating:3,
      image:"https://cdn.pixabay.com/photo/2016/05/31/23/21/running-shoes-1428048_960_720.jpg"
    }
    ,{
      id:"e86e6851-76be-446c-a056-90d9d92dc68c",
      product_name:"Shoes Sneakers Footwear",
      product_group:"wearable",
      product_desc:"This is a shoes which is quite famous in india.",
      price:2599,
      discount:10,
      rating:4,
      image:"https://cdn.pixabay.com/photo/2020/07/22/09/28/adidas-5428548_960_720.jpg"
    }
    ,{
      id:"f36e7551-76be-346c-a056-90576d92dc68d",
      product_name:"Shoes Sneakers Footwear",
      product_group:"wearable",
      product_desc:"This is a shoes which is quite famous in india.",
      price:6899,
      discount:18,
      rating:5,
      image:"https://cdn.pixabay.com/photo/2018/06/06/16/30/shoe-3458280_1280.jpg"
    }
  ]

export default products;