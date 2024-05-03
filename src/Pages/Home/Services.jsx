import React from "react";
const Services = () => {

const ourServices = [
    {id:1 , title:"Catering" , descrip: "Delight your guests with our flavors and presentation", image:"/images/home/services/icon1.png" },
    {id:2 , title:"Fast Delivary" , descrip: "We deliver your order with love and properly to your door", image:"/images/home/services/icon2.png" },
    {id:3 , title:"Online Ordering" , descrip: "Explore menu and order with ease using our Online Ordering", image:"/images/home/services/icon3.png" },
    {id:4 , title:"Gift Cards" , descrip: "Give the gift exceptional dining with Baresto Cafe Gift Cards", image:"/images/home/services/icon4.png" },
]

  return (
    <div className="my-12 flex flex-col md:flex-row items-center justify-between gap-12 px-4 md:px-0">
      <div className="md:w-1/2">
        <div className="text-left">
          <p className="subtitle">Our Story and Services</p>
          <h2 className="title">Our Culinary Journey And Services</h2>
          <p className="my-5 text-secondary leading-[30px] font-medium">
            Rooted in passion , we curate unforgatble dining experiences and
            offer exceptioanl services , blending cullinary artisty with warm
            hospitality
          </p>
          <div>
            <button className="btn bg-green text-white px-8 py-3 rounded-xl">
              Explore
            </button>
          </div>
        </div>
      </div>

      <div className="md:w-1/2">
       <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 items-center">
        {
            ourServices.map((service , i) => (
                <div key={i} className="shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-gren cursor-pointer hover:border-indigo-600
                transition-all duration-200 hover:border">
                        <img src={service.image} alt="" className="mx-auto " />
                        <p className="pt-3 font-semibold">{service.title}</p>
                        <p className="text-[#90Bd95]">{service.descrip}</p>
                </div>
            )) 
        }
       </div>
      </div>
    </div>
  );
};

export default Services;
