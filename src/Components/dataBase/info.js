import { BsReception4 } from 'react-icons/bs';
import img1 from '../../assest/img1.svg';
import img2 from "../../assest/img2.svg";
import img3 from "../../assest/img3.svg";


const array = [
    {
        id : 1,
        image: img1,
        title: "Brand & Identity Design for Marketers",
        substitle: "Lorem ipsum dolor sit amet, consectere adipiscing elit. Feugiat feugiat congue viverra facilisis.",
        bottomIcon: <BsReception4/>,
        bottomLevel: "Beginner",
        bottomPrice: "$45",
        bottomDate: "/month",
    },
    {
        id : 2,
        image: img2,
        title: "Advanced Funnels with Google Analytics",
        substitle: "Lorem ipsum dolor sit amet, consectere adipiscing elit. Feugiat feugiat congue viverra facilisis.",
        bottomIcon: <BsReception4/>,
        bottomLevel: "Advanced",
        bottomPrice: "$45",
        bottomDate: "/month",
    },
    {
        id : 3,
        image: img3,
        title: "Landing Page A/B Testing & Conversion Optimization",
        substitle: "Lorem ipsum dolor sit amet, consectere adipiscing elit. Feugiat feugiat congue viverra facilisis.",
        bottomIcon: <BsReception4/>,
        bottomLevel: "Intermediate",
        bottomPrice: "$45",
        bottomDate: "/month",
    },
    {
        id : 4,
        image: img2,
        title: "Advanced Funnels with Google Analytics",
        substitle: "Lorem ipsum dolor sit amet, consectere adipiscing elit. Feugiat feugiat congue viverra facilisis.",
        bottomIcon: <BsReception4/>,
        bottomLevel: "Advanced",
        bottomPrice: "$45",
        bottomDate: "/month",
    },
    {
        id : 5,
        image: img3,
        title: "Landing Page A/B Testing & Conversion Optimization",
        substitle: "Lorem ipsum dolor sit amet, consectere adipiscing elit. Feugiat feugiat congue viverra facilisis.",
        bottomIcon: <BsReception4/>,
        bottomLevel: "Intermediate",
        bottomPrice: "$45",
        bottomDate: "/month",
    },
    
];
export default array;

// let array = [
//     {
//         id: 1,
//         image: img1,
//         titleName: "Brand & Identity Design for Marketers",
//         titleSmallText: "Lorem ipsum dolor sit amet, consectere adipiscing elit. Feugiat feugiat congue viverra facilisis.",
//         bottomIcon: <BsReception4/>,
//         bottomLevel: "Beginner",
//         bottomPrice: "$45",
//         bottomDate: "/month"
//     }

// ]

// export default array;


// data.map((dataJson) => {
//   return(
//   <div key={dataJson.id}>
//   <img className="popularCoursesImages" src={dataJson.image} alt="There is a image" />
//   <p className="popularCourseSmalBoldText">{dataJson.titleName}</p>
//   <p className="popularCourseSmalText">{dataJson.titleSmallText}</p>
//   <hr className="widthForHr" />
//   <div  className="rectangleFull"></div>
//     {dataJson.bottomICon } <span className="beginnerPopularCourse">{dataJson.bottomLevel}</span>
//     <span className="popularCourse45AndMonth">
//       <span className="poularCourse45">{dataJson.bottomPrice}</span> <span className="popularCourseMonth">{dataJson.bottomDate}</span>
//     </span>
//   </div>
//   )
//   })