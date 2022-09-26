/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Head from 'next/head';
import setTime from '../services/toLocalString';

function SinglePost(data) {
  return (

    <div className="max-w-screen-xl mx-auto mt-20">
      <Head>
        <title>
          {data.post.title}
          {' '}
          - Budget your trip like a pro
        </title>
        <meta name="description" content="Budget your trip like a pro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mt-10">
        <div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative h-96">
          <div
            className="absolute left-0 bottom-0 w-full h-full z-10 bg-slate-900"
            style={{ background: 'linear-gradient(180deg,transparent,rgba(0,0,0,.7)' }}
          />
          <img src={data.post.featuredImage.node.sourceUrl} className="absolute left-0 top-0 w-full h-full z-0 object-cover" alt="banner" />
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <a
              href="#"
              className="px-4 py-1 bg-tripbudget-yellow text-black inline-flex items-center justify-center mb-2"
            >
              {data.post.categories.nodes.map((category) => (
                category.name
              ))}

            </a>
            <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
              {data.post.title}
            </h2>
            <div className="flex mt-3">
              <img
                src={data.post.author.node.avatar.url}
                className="h-10 w-10 rounded-full mr-2 object-cover"
                alt="banner"
              />
              <div>
                <p className="font-semibold text-gray-200 text-sm">
                  {' '}
                  {data.post.author.node.name}
                  {' '}
                </p>
                <p className="font-semibold text-gray-400 text-xs">{setTime(data.post.date)}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">

          <article className="pb-6" dangerouslySetInnerHTML={{ __html: data.post.content }} />
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch('https://wordpress-482900-2916415.cloudwaysapps.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
              query SinglePost($id: ID!, $idType: PostIdType!) {
                  post(id: $id, idType: $idType) {
                      categories {
                        nodes {
                          name
                        }
                      }
                      author {
                        node {
                          avatar {
                            url
                          }
                          name
                        }
                      }
                      date
                      title
                      slug
                      content
                      featuredImage {
                          node {
                              sourceUrl
                          }
                      }
                  }
              }
          `,
      variables: {
        id: context.params.slug,
        idType: 'SLUG',
      },
    }),
  });

  const json = await res.json();

  return {
    props: {
      post: json.data.post,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch('https://wordpress-482900-2916415.cloudwaysapps.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
          query AllPostsQuery {
              posts {
                  nodes {
                      categories {
                        nodes {
                          name
                        }
                      }
                      date
                      author {
                        node {
                          avatar {
                            url
                          }
                          name
                        }
                      }
                      slug
                      content
                      title
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
  });

  const json = await res.json();
  const posts = json.data.posts.nodes;

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export default SinglePost;
