import ProductsData from "@/api/ProductData";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ProductsData.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg">
            <Image
              src={product.image}
              alt={product.Title}
              width={200}
              height={200}
              className="object-cover w-full h-48 rounded-lg"
            />
            <h2 className="mt-4 text-xl font-semibold">{product.Title}</h2>
            <p className="text-lg text-gray-700">{product.Price}</p>
            <p className="text-sm text-gray-600">{product.Product}</p>
            <Link href={`/product/${product.id}`}>
              <p className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                View Details
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
