import Products from "../components/Products";
import ProductCard from "../components/ProductCard";
import Layout from "../components/Layout";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import { useFetchUser } from "../utils/user";
import { config } from "../config";

const Index = ({ products }) => {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      <div>
        <Head>
          <title>SweetHope | Home</title>
        </Head>
        <Products title='coleccion ensueños'>
          {products.map(product => (
            <ProductCard {...product} key={product.id} />
          ))}
        </Products>
      </div>
    </Layout>
  );
};

Index.getInitialProps = async ctx => {
  const res = await fetch(`${config.apiUrl}/products`);
  const products = await res.json();
  return { products };
};

export default Index;
