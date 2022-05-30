export default function Index() {
  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.4",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
            <input type="text" name="search" id="search" style={{ height: "20px", width: "300px", padding: "10px", fontSize: "1.5em" }} />
          </div>
          <div>
            
          </div>
        </form>
      </div>
    </div>
  );
}
