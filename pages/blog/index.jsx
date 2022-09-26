import React from 'react';

function Blog({ posts }) {
  return (
    <div>
      {
        posts && posts.nodes.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <img src={post.featuredImage?.node.sourceUrl} alt="" className="w-auto h-2/3" />
          </div>
        ))
       }
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch('https://wordpress-482900-2916415.cloudwaysapps.com/graphql', {
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
            excerpt
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

  return {
    props: {
      posts: json.data.posts,
    },
  };
}
export default Blog;
