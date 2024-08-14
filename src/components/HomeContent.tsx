import Button from "../UI/Button";
import sofaImg from "../assets/home-sofa.jpg";
import sofaLights from "../assets/home-sofa-lights.jpg";
import { FEATURED_PRODUCTS } from "../product-items-data";
import ProductItem from "./productItem";
import { useNavigate } from "react-router-dom";

export default function HomeContent() {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col mb-10 text-blue-950/85 dark:text-slate-100">
      <div className="flex  mb-16 justify-between items-center">
        <div className="lg:basis-5/12 basis-8/12">
          <h1 className="text-6xl font-bold  leading-[4rem]">
            We are changing the way people shop
          </h1>
          <p className="mt-5 text-lg leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            repellat explicabo enim soluta temporibus asperiores aut obcaecati
            perferendis porro nobis.
          </p>
          <Button
            onClick={() => navigate("products")}
            styles="bg-blue-500 dark:bg-pink-400 uppercase inline-block mt-5 text-blue-100 dark:text-dark-blue text-sm font-semibold px-3 py-3 rounded-md hover:bg-blue-600">
            our products
          </Button>
        </div>

        <div className="bg-blue-950 dark:bg-dark-blue-1 hidden basis-6/12 h-[28rem] rounded-2xl p-4 lg:flex items-center gap-4 overflow-hidden">
          <img className="w-80 h-full rounded-2xl" src={sofaImg} alt="a sofa" />
          <img
            className="w-80 h-full rounded-2xl"
            src={sofaLights}
            alt="sofa with  hanging lights"
          />
        </div>
      </div>
      <div>
        <h2 className="uppercase text-2xl font-semibold tracking-wide py-5 border-b-[1px] dark:border-dark-blue">
          featured products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {FEATURED_PRODUCTS.map((item) => (
            <ProductItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
