import { useLoaderData } from "@remix-run/react";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://unpkg.com/modern-css-reset@1.4.0/dist/reset.min.css",
    },
  ];
}

export const loader = async () => {
  // some code here
  return [
    { href: "", description: "", title: "" },
    { href: "", description: "", title: "" },
    { href: "", description: "", title: "" },
  ];
};

const GalleryList = ({ children }) => (
  <ul style={{ display: "flex", flexWrap: "wrap" }}>{children}</ul>
);

const GalleryItem = ({ children }) => (
  <li style={{ height: "40vh", flexGrow: 1, listStyleType: "none" }}>{children}</li>
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
  const data = useLoaderData();

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
              <label for="search">Search for an Image:</label>
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
          <GalleryItem>
            <GalleryImage src="https://images-assets.nasa.gov/image/NHQ201907180120/NHQ201907180120~thumb.jpg" />
          </GalleryItem>
          <GalleryItem>
            <GalleryImage src="https://images-assets.nasa.gov/image/NHQ201907180108/NHQ201907180108~thumb.jpg" />
          </GalleryItem>
          <GalleryItem>
            <GalleryImage src="https://images-assets.nasa.gov/image/NHQ201907190146/NHQ201907190146~thumb.jpg" />
          </GalleryItem>
        </GalleryList>
      </div>
    </div>
  );
}
