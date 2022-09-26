/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import { useDispatch } from 'react-redux';
import Hero from '../components/Hero';
import styles from './styles/Home.module.css';
import HowThatWorks from '../components/HowThatWorks';
import SeeTrips from '../components/SeeTrips';
import BlogPosts from '../components/BlogPosts';
import PreFooter from '../components/PreFooter';
import ScrollToTop from '../components/ScrollToTop';
import { setGetAllTripsState } from '../features/trip/tripSlice';

export default function Home({ allTrips }) {
  const dispatch = useDispatch();
  dispatch(setGetAllTripsState(allTrips));

  return (
    <div className={styles.container}>
      <Head>
        <title>TripBudget - Budget your trip like a pro</title>
        <meta name="description" content="Budget your trip like a pro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <HowThatWorks />
      <SeeTrips />
      <BlogPosts />
      <PreFooter />
      <ScrollToTop />
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const response = await fetch('http://localhost:3000/api/trip');
  const allTrips = await response.json();

  return {
    props: {
      allTrips,
    },
  };
}
