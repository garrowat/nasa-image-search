import type { IResolvers } from "@graphql-tools/utils";

export type Image = {
  id: String;
  href: String;
  title: String;
  description: String;
};

const resolvers: IResolvers = {
  Query: {
    images: async (source, args, context, info) => {
      const imagesTest: Image[] = [
        {
          id: "NHQ201907180120",
          href: "https://images-assets.nasa.gov/image/NHQ201907180120/NHQ201907180120~thumb.jpg",
          description:
            "The Moon to Mars exhibit is seen at the Apollo 11 50th Anniversary celebration on the National Mall, Thursday, July 18, 2019 in Washington. Apollo 11 was the first mission to land astronauts on the Moon and launched on July 16, 1969 with astronauts Neil Armstrong, Michael Collins, and Buzz Aldrin. Photo Credit: (NASA/Connie Moore)",
          title: "Apollo 11 50th Anniversary Celebration",
        },
        {
          id: "NHQ201907180121",
          href: "https://images-assets.nasa.gov/image/NHQ201907180120/NHQ201907180120~thumb.jpg",
          description:
            "The Moon to Mars exhibit is seen at the Apollo 11 50th Anniversary celebration on the National Mall, Thursday, July 18, 2019 in Washington. Apollo 11 was the first mission to land astronauts on the Moon and launched on July 16, 1969 with astronauts Neil Armstrong, Michael Collins, and Buzz Aldrin. Photo Credit: (NASA/Connie Moore)",
          title: "Apollo 11 50th Anniversary Celebration",
        },
        {
          id: "NHQ201907180122",
          href: "https://images-assets.nasa.gov/image/NHQ201907180120/NHQ201907180120~thumb.jpg",
          description:
            "The Moon to Mars exhibit is seen at the Apollo 11 50th Anniversary celebration on the National Mall, Thursday, July 18, 2019 in Washington. Apollo 11 was the first mission to land astronauts on the Moon and launched on July 16, 1969 with astronauts Neil Armstrong, Michael Collins, and Buzz Aldrin. Photo Credit: (NASA/Connie Moore)",
          title: "Apollo 11 50th Anniversary Celebration",
        },
      ];
      const data = await fetch(
        `https://images-api.nasa.gov/search?q=${encodeURIComponent(
          "Apollo 11"
        )}`
      );
      const images = await data.json()
      const collectionItems = images?.collection?.items;

      // for some reason, this seemingly simple act of mapping over the data causes the loader to error out, even if we don't return it
      /* const mappedImages = collectionItems.map(
        (image: any) => {
          console.log({ imagedata: image.links[0] });

          return {
            id: image?.data[0]?.nasa_id || "",
            href: image?.links[0]?.href || "",
            description: image?.data[0]?.description || "",
            title: image?.data[0]?.title || "",
          };
        }
      ); */
      return imagesTest;
    },
  },
};
export default resolvers;
