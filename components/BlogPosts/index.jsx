/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useSelector } from 'react-redux';
import NextLink from 'next/link';
import { selectPostsState } from '../../features/post/postSlice';
import setTime from '../../pages/services/toLocalString';

function BlogPosts() {
  const allPosts = useSelector(selectPostsState);
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100 bg-[url('/images/trip-vector-left.png')] bg-hero bg-no-repeat bg-contain bg-left-top sm:pb-80 lg:pb-20 pb-20 pt-32 sm:bg-contain lg:bg-auto" id="getInspired">
      <div className="lg:text-center mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-bold text-tripbudget-yellow">Blog</h2>
        <p className="mt-2 text-4xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl dark:text-white">
          Get inspired!
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto pb-12 dark:text-gray-300">
          Not sure where to go in your next trip? take a look to our blog posts. Travel guides for everything: from activities to do, how to get there, best places to visit and even travel tips to save money!
        </p>
      </div>
      <div className="container max-w-2xl p-6 mx-auto space-y-6 sm:space-y-12 lg:max-w-7xl">
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allPosts ? allPosts?.nodes?.map((post) => (
            <NextLink href={`http://localhost:3000/blog/${post.slug}`} passHref key={post.id}>
              <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline rounded-lg border border-gray-200 shadow-md dark:bg-gray-700 dark:border-gray-700 bg-white">
                <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={post.featuredImage?.node.sourceUrl} />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{post.title}</h3>
                  <span className="text-xs dark:text-gray-400">{setTime(post.date)}</span>
                </div>
              </a>
            </NextLink>
          )) : null}
        </div>
      </div>
    </section>
  );
}

export default BlogPosts;
