
import {ProductCard} from "../components"
import { useTitle } from "../hooks/useTitle";

export const Home = () => {
  const products =[
    {"id":1001,"name": "Sony Wh-Ch510 Bluetooth Wireless", "price":149, "image": "../assets/pic1.avif"},
    {"id":1002,"name": "Studio Pro Headphones — Navy", "price":99, "image": "../assets/pic2.webp"},
    {"id":1005,"name": "Mi 55 Inch Ultra HD TV (4X)", "price":349, "image": "../assets/pic4.webp"},
    {"id":1004,"name": "Intex LED-3243 32 Inch HD TV", "price":299, "image": "../assets/pic3.avif"},
    {"id":1003,"name": "iPhone 16 Pro Max - 128GB- Blue", "price":599, "image": "../assets/iphone13.jpg"},
    {"id":1006,"name": "Samsung Galaxy Z Fold 6", "price":499, "image": "../assets/pic6.jpg"}
  ];
  useTitle("Home");
  return (
    <main>
      <section className='products'>
      {products.map((product) =>(
        <ProductCard key={product.id} product={product}/>
      ))}
        
      </section>
    </main>
  )
}
