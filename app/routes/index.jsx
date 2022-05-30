import { useLoaderData } from "@remix-run/react";
import graphqlClient from "~/graphql/client";
import gql from "graphql-tag";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://unpkg.com/modern-css-reset@1.4.0/dist/reset.min.css",
    },
  ];
}

export const loader = async () => {
  const res = await graphqlClient.query({
    query: gql`
      query getImages {
        images {
          id
          href
          title
          description
        }
      }
    `,
  });
  return res;
};

const GalleryList = ({ children }) => (
  <ul style={{ display: "flex", flexWrap: "wrap" }}>{children}</ul>
);

const GalleryItem = ({ children }) => (
  <li style={{ height: "40vh", flexGrow: 1, listStyleType: "none" }}>
    {children}
  </li>
);

const GalleryImage = ({ ...props }) => (
  <img
    {...props}
    alt="NASA search result"
    style={{
      maxHeigh: "100%",
      minHeight: "100%",
      objectFit: "cover",
      verticalAlign: "bottom",
    }}
  />
);

export default function Index() {
  const queryResults = useLoaderData();
  const searchResults = queryResults?.data.images;

  return (
    <div>
      <div
        style={{
          fontFamily: "system-ui, sans-serif",
          lineHeight: "1.4",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "25px",
        }}
      >
        <h1>Welcome to Nasa Image Search</h1>
        <div>
          <form>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <label htmlFor="search">Search for an Image:</label>
              <input
                type="text"
                name="search"
                id="search"
                style={{
                  height: "20px",
                  width: "300px",
                  padding: "10px",
                  fontSize: "1.5em",
                }}
              />
            </div>
          </form>
        </div>
      </div>
      <div>
        <GalleryList>
          {searchResults &&
            searchResults?.map((searchResult) => (
              <GalleryItem key={searchResult.id}>
                <GalleryImage
                  alt={searchResult.title}
                  src={searchResult.href}
                />
              </GalleryItem>
            ))}
        </GalleryList>
      </div>
    </div>
  );
}
