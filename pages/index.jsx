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
import { setGetAllPostsState } from '../features/post/postSlice';

export default function Home({ allTrips, posts }) {
  const dispatch = useDispatch();
  dispatch(setGetAllTripsState(allTrips));
  dispatch(setGetAllPostsState(posts));

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
    fetch('http://localhost:3000/api/trip'),
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
