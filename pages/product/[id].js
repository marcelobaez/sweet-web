import React, { useState } from "react";
import fetch from "isomorphic-unfetch";
import Breadcrumbs from "../../components/Breadcrumbs";
import ProductGallery from "../../components/ProductGallery";
import ProductSpecs from "../../components/ProductSpecs";
import Divider from "../../components/Divider";
import Layout from "../../components/Layout";
import { connect } from "react-redux";
import { useFetchUser } from "../../utils/user";
import { selectProduct } from "../../actions";
import { motion } from "framer-motion";

const ProductDetail = ({ product }) => {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      <motion.div
        initial='exit'
        animate='enter'
        exit='exit'
        className='py-6 lg:p-6 xl:p-6 flex flex-wrap justify-center bg-white'
      >
        <div className='flex flex-wrap lg:justify-start xl:justify-start justify-center'>
          <Breadcrumbs category={product.department} title={product.name} />
          <ProductGallery />
          <ProductSpecs
            user={user}
            title={product.name}
            price={product.price}
            rating={product.rating}
            desc={product.description}
          />
        </div>
      </motion.div>
    </Layout>
  );
};

ProductDetail.getInitialProps = async ({ req, query, store }) => {
  const results = await fetch(
    `https://sweethope-api.marcelobaez.now.sh/api/products/${query.id}`
  );
  const product = await results.json();

  store.dispatch(selectProduct(product.data));

  // let user;

  // if (typeof window === "undefined") {
  //   const session = await auth0.getSession(req);
  //   user = session.user || { user: null };
  // } else {
  //   user = await fetchUser();
  // }

  // const preference = {
  //   payer: {
  //     id: user.sub
  //   },
  //   items: [product.data]
  // };

  // const checkReq = await fetch("http://localhost:4000/api/checkout", {
  //   method: "POST",
  //   body: JSON.stringify(preference),
  //   headers: {
  //     "Content-Type": "application/json"
  //   }
  // });

  // const res = await checkReq.json();
  return { product: product.data };
};

export default connect(state => state)(ProductDetail);
