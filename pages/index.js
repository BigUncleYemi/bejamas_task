import React, { useState, useEffect } from 'react';
import Head from 'next/head';

// components
import { Header, PhotoOfTheDay, PremiumPhotos } from '../components/';

// data
import { fetchData } from '../components/home/data';

export default function Home() {
  const [pageData, setPageData] = useState([]);
  const [featured, setFeatured] = useState({});
  const [selected, setSelected] = useState('name');
  const [order, setOrder] = useState('asc');
  const [selectedFilter, setSelectedFilter] = useState([]);
  const [selectedFilterPrice, setSelectedFilterPrice] = useState(null);

  const fetchPageData = async () => {
    try {
      const data = await fetchData();
      let productData = [];
      if (selectedFilter.length > 0) {
        productData = data
          .filter(item => item.featured === false)
          .filter(item => selectedFilter.includes(item.category));
      } else {
        productData = data.filter(item => item.featured === false);
      }
      if (selectedFilterPrice !== null) {
        if (Number(selectedFilterPrice) === 0) {
          productData = productData.filter(item => item.price < 20);
        } else if (Number(selectedFilterPrice) === 1) {
          productData = productData.filter(
            item => item.price < 100 && item.price >= 20,
          );
        } else if (Number(selectedFilterPrice) === 2) {
          productData = productData.filter(
            item => item.price < 200 && item.price >= 100,
          );
        } else if (Number(selectedFilterPrice) === 3) {
          productData = productData.filter(
            item => item.price <= 300 && item.price >= 200,
          );
        }
      }
      const featuredData = data.filter(item => item.featured === true)[0];

      setFeatured(featuredData);
      setPageData(productData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPageData();
  }, []);
  useEffect(() => {
    fetchPageData();
  }, [selectedFilter, selectedFilterPrice]);
  return (
    <div className="w-screen">
      <Head>
        <title>BEJAMAS_</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="description" content="Premium photos at its finest." />
        <meta name="author" content="@BEJAMAS" />
        <meta name="twitter" content="@BEJAMAS"/>
        <meta name="instagram" content="@BEJAMAS"/>
        <meta property="og:type" content="website"/>
        <meta name="keywords" content="premium photo, landmarks, people, foods, pets, photos, images" />
      </Head>

      <Header />

      {/* page content */}
      <PhotoOfTheDay featuredProduct={featured} />

      {/* premium photos catalog */}

      <PremiumPhotos
        setSelectedFilterPrice={setSelectedFilterPrice}
        setSelectedFilter={setSelectedFilter}
        order={order}
        setOrder={setOrder}
        selected={selected}
        setSelected={setSelected}
        landingproductData={pageData}
      />
    </div>
  );
}
