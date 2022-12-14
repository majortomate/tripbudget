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
import Navbar from '../components/Navbar';
import { setGetAllTripsState } from '../features/trip/tripSlice';
import { setGetAllPostsState } from '../features/post/postSlice';

export default function Home({ allTrips, posts }) {
  const dispatch = useDispatch();
  dispatch(setGetAllTripsState(allTrips));
  dispatch(setGetAllPostsState(posts));

  return (
    <div className={styles.container}>
      <Navbar />
      <Head>
        <title>TripBudget - Budget your trip like a pro</title>
        <meta name="description" content="Budget your trip like a pro" />
        <meta property="og:title" content="TripBudget - Budget your trip like a pro" />
        <meta property="og:image" content="https://res.cloudinary.com/knowhere/image/upload/v1664142646/static/isotipo_tripbudget_bkc2f4.svg" />
        <meta property="og:description" content="A trip could be way expensive if you don't know the costs or at least how much in reality you will like to spend. Be the master of your trip expenses and start budgeting your trip now." />
        <meta property="og:url" content="https://tripbudget-mnc8.vercel.app/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <HowThatWorks />
      <SeeTrips />
      <BlogPosts posts={posts} />
      <PreFooter />
      <ScrollToTop />
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const [tripRes, postsRes] = await Promise.all([
    fetch('https://tripbudget-mnc8.vercel.app/api/trip'),
    fetch('https://wordpress-482900-2916415.cloudwaysapps.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
      query HomePageQuery {
        posts {
          nodes {
            date
            slug
            title
            content
            id
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
          `,
      }),
    }),

  ]);
  const [allTrips, posts] = await Promise.all([
    tripRes.json(),
    postsRes.json(),
  ]);
  return {
    props: {
      allTrips,
      posts,
    },
  };
}
