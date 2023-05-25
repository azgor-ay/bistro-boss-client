import React from "react";
import { Helmet } from "react-helmet-async";
import SingleMenuSection from "../Components/MenuPageComponents/SingleMenuSection";
import useMenuData from "../MyHooks/useMenuData";
import offersBannerBg from "../assets/menu/banner3.jpg";
import dessertsBannerBg from "../assets/menu/dessert-bg.jpeg";
import pizzasBannerBg from "../assets/menu/pizza-bg.jpg";
import saladsBannerBg from "../assets/menu/salad-bg.jpg";
import soupsBannerBg from "../assets/menu/soup-bg.jpg";

const OurMenuPage = () => {
  const [menu] = useMenuData();
  const offers = menu.filter((m) => m.category === "offered");
  const desserts = menu.filter((m) => m.category === "dessert");
  const pizzas = menu.filter((m) => m.category === "pizza");
  const salads = menu.filter((m) => m.category === "salad");
  const soups = menu.filter((m) => m.category === "soup");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <SingleMenuSection
        key={"offers"}
        bannerTitle="OUR MENU"
        bannerDescription="WOULD YOU LIKE TO TRY A DISH"
        bannerBgColor="black"
        bannerCardBgImg={offersBannerBg}
        sectionTitle="TODAY'S OFFER"
        sectionSubTitle="Don't miss"
        dishes={offers}
      ></SingleMenuSection>

      <SingleMenuSection
        key={"desserts"}
        bannerTitle="desserts"
        bannerDescription="Indulge in sweet bliss with our delectable desserts, handcrafted to satisfy your cravings for the perfect ending."
        bannerBgColor="black"
        bannerCardBgImg={dessertsBannerBg}
        dishes={desserts}
      ></SingleMenuSection>

      <SingleMenuSection
        key={"pizzas"}
        bannerTitle="pizzas"
        bannerDescription="Experience pizza perfection with our artisanal pies, combining fresh ingredients and flavors for an unforgettable taste."
        bannerBgColor="black"
        bannerCardBgImg={pizzasBannerBg}
        dishes={pizzas}
      ></SingleMenuSection>

      <SingleMenuSection
        key={"salads"}
        bannerTitle="salads"
        bannerDescription="Revitalize your palate with our vibrant salad creations, featuring farm-fresh ingredients and delightful dressings for a healthy delight."
        bannerBgColor="black"
        bannerCardBgImg={saladsBannerBg}
        dishes={salads}
      ></SingleMenuSection>

      <SingleMenuSection
        key={"soups"}
        bannerTitle="soups"
        bannerDescription="Savor the warmth and comfort of our homemade soups, simmered to perfection with rich flavors and nourishing ingredients."
        bannerBgColor="black"
        bannerCardBgImg={soupsBannerBg}
        dishes={soups}
      ></SingleMenuSection>
    </div>
  );
};

export default OurMenuPage;
