import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const gallery = Object.values(
  import.meta.glob("@photos/*.{png,jpg,jpeg,PNG,JPEG}", {
    eager: true,
    as: "url",
  })
);

export const Carousel = () => {
  return (
    <PhotoProvider>
      <div className="p-4 mx-auto space-x-4 bg-opacity-50 rounded-md 2xl:w-11/12 carousel ">
        {gallery.map((photo) => (
          <PhotoView src={photo}>
            <div key={photo} className="w-auto carousel-item h-96 hashchange">
              <img src={photo} className="object-cover rounded-md" />
            </div>
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
    // <div className="relative w-8/12 max-w-6xl gap-10 py-12 h-4/6 carousel carousel-vertical rounded-box">
    //   {gallery.map((photo) => (
    //     <div className="object-cover h-full mx-auto carousel-item">
    //       <img src={photo} className="w-auto h-full" />
    //     </div>
    //   ))}
    // </div>
  );
};

// export default function App() {
//   return (
//     <PhotoProvider>
//       <PhotoView src="/1.jpg">
//         <img src="/1-thumbnail.jpg" alt="" />
//       </PhotoView>
//     </PhotoProvider>
//   );
// }
