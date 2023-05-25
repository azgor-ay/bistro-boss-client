import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import BannerCard from "../Components/ShareAbleComponents/BannerCard";
import backgroundImg from "../assets/shop/banner2.jpg";
import useMenuData from "../MyHooks/useMenuData";
import FoodCategoryTab from "../Components/OrderFoodPageComponents/FoodCategoryTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const OrderFood = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drink"];
  const {category} = useParams();
  const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenuData();

  const salads = menu.filter((m) => m.category === "salad");
  const pizzas = menu.filter((m) => m.category === "pizza");
  const soups = menu.filter((m) => m.category === "soup");
  const desserts = menu.filter((m) => m.category === "dessert");
  const drinks = menu.filter((m) => m.category === "drinks");

  return (
    <section>
      <Helmet>
        <title>Bistro Boss | Order Foods</title>
      </Helmet>
      <BannerCard
        heading={"Order Dish"}
        subHeading={"We ensure deliver your food under 20 Minutes only"}
        background={"black"}
        image={backgroundImg}
      ></BannerCard>
      <Tabs
        className={"tabs-container"}
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList className={"categories"}>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>soup</Tab>
          <Tab>dessert</Tab>
          <Tab>drink</Tab>
        </TabList>

        <TabPanel>
          <FoodCategoryTab items={salads}></FoodCategoryTab>
        </TabPanel>
        <TabPanel>
          <FoodCategoryTab items={pizzas}></FoodCategoryTab>
        </TabPanel>
        <TabPanel>
          <FoodCategoryTab items={soups}></FoodCategoryTab>
        </TabPanel>
        <TabPanel>
          <FoodCategoryTab items={desserts}></FoodCategoryTab>
        </TabPanel>
        <TabPanel>
          <FoodCategoryTab items={drinks}></FoodCategoryTab>
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default OrderFood;
