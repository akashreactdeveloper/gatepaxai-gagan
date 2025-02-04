import React from "react";
import "./Landing.css";

const featuresData = [
  {
    id: 1,
    bgClass: "light-blue-bg",
    imgSrc: "https://via.placeholder.com/40",
    imgAlt: "Advanced AI Solutions",
    title: "Advanced AI Solutions",
    description:
      "Cutting-edge artificial intelligence tailored for your business needs.",
    svg: (
      <svg
        width="67"
        height="70"
        viewBox="0 0 67 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.1875 11.75C15.6771 11.75 14.3932 12.2786 13.3359 13.3359C12.2786 14.3932 11.75 15.6771 11.75 17.1875C11.75 18.6979 12.2786 19.9818 13.3359 21.0391C14.3932 22.0964 15.6771 22.625 17.1875 22.625C18.6979 22.625 19.9818 22.0964 21.0391 21.0391C22.0964 19.9818 22.625 18.6979 22.625 17.1875C22.625 15.6771 22.0964 14.3932 21.0391 13.3359C19.9818 12.2786 18.6979 11.75 17.1875 11.75ZM17.1875 48C15.6771 48 14.3932 48.5286 13.3359 49.5859C12.2786 50.6432 11.75 51.9271 11.75 53.4375C11.75 54.9479 12.2786 56.2318 13.3359 57.2891C14.3932 58.3464 15.6771 58.875 17.1875 58.875C18.6979 58.875 19.9818 58.3464 21.0391 57.2891C22.0964 56.2318 22.625 54.9479 22.625 53.4375C22.625 51.9271 22.0964 50.6432 21.0391 49.5859C19.9818 48.5286 18.6979 48 17.1875 48ZM4.5 0.875H62.5C63.5271 0.875 64.388 1.2224 65.0828 1.91719C65.7776 2.61198 66.125 3.47292 66.125 4.5V29.875C66.125 30.9021 65.7776 31.763 65.0828 32.4578C64.388 33.1526 63.5271 33.5 62.5 33.5H4.5C3.47292 33.5 2.61198 33.1526 1.91719 32.4578C1.2224 31.763 0.875 30.9021 0.875 29.875V4.5C0.875 3.47292 1.2224 2.61198 1.91719 1.91719C2.61198 1.2224 3.47292 0.875 4.5 0.875ZM4.5 37.125H62.5C63.5271 37.125 64.388 37.4724 65.0828 38.1672C65.7776 38.862 66.125 39.7229 66.125 40.75V66.125C66.125 67.1521 65.7776 68.013 65.0828 68.7078C64.388 69.4026 63.5271 69.75 62.5 69.75H4.5C3.47292 69.75 2.61198 69.4026 1.91719 68.7078C1.2224 68.013 0.875 67.1521 0.875 66.125V40.75C0.875 39.7229 1.2224 38.862 1.91719 38.1672C2.61198 37.4724 3.47292 37.125 4.5 37.125Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: 2,
    bgClass: "light-blue-bg",
    imgSrc: "https://via.placeholder.com/40",
    imgAlt: "Machine Learning Integration",
    title: "Machine Learning Integration",
    description:
      "Seamlessly integrate machine learning models into your existing systems.",
    svg: (
      <svg
        width="64"
        height="71"
        viewBox="0 0 64 71"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.6 51.6L28.5 46.525L20.975 39L28.5 31.475L23.6 26.4L11 39L23.6 51.6ZM40.4 51.6L53 39L40.4 26.4L35.5 31.475L43.025 39L35.5 46.525L40.4 51.6ZM7.5 70.5C5.575 70.5 3.92708 69.8146 2.55625 68.4437C1.18542 67.0729 0.5 65.425 0.5 63.5V14.5C0.5 12.575 1.18542 10.9271 2.55625 9.55625C3.92708 8.18542 5.575 7.5 7.5 7.5H22.2C22.9583 5.4 24.2271 3.70833 26.0063 2.425C27.7854 1.14167 29.7833 0.5 32 0.5C34.2167 0.5 36.2146 1.14167 37.9937 2.425C39.7729 3.70833 41.0417 5.4 41.8 7.5H56.5C58.425 7.5 60.0729 8.18542 61.4437 9.55625C62.8146 10.9271 63.5 12.575 63.5 14.5V63.5C63.5 65.425 62.8146 67.0729 61.4437 68.4437C60.0729 69.8146 58.425 70.5 56.5 70.5H7.5ZM32 11.875C32.7583 11.875 33.3854 11.6271 33.8812 11.1312C34.3771 10.6354 34.625 10.0083 34.625 9.25C34.625 8.49167 34.3771 7.86458 33.8812 7.36875C33.3854 6.87292 32.7583 6.625 32 6.625C31.2417 6.625 30.6146 6.87292 30.1187 7.36875C29.6229 7.86458 29.375 8.49167 29.375 9.25C29.375 10.0083 29.6229 10.6354 30.1187 11.1312C30.6146 11.6271 31.2417 11.875 32 11.875Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: 3,
    bgClass: "light-blue-bg",
    imgSrc: "https://via.placeholder.com/40",
    imgAlt: "Global AI Network",
    title: "Global AI Network",
    description:
      "Connect to our worldwide network of AI resources and expertise.",
    svg: (
      <svg
        width="71"
        height="71"
        viewBox="0 0 71 71"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M35.5 70.0833C30.716 70.0833 26.2201 69.1755 22.0125 67.3599C17.8049 65.5443 14.1448 63.0802 11.0323 59.9677C7.91978 56.8552 5.45572 53.1951 3.64009 48.9875C1.82447 44.7799 0.916656 40.284 0.916656 35.5C0.916656 30.716 1.82447 26.2201 3.64009 22.0125C5.45572 17.8049 7.91978 14.1448 11.0323 11.0323C14.1448 7.91978 17.8049 5.45572 22.0125 3.64009C26.2201 1.82447 30.716 0.916656 35.5 0.916656C40.284 0.916656 44.7799 1.82447 48.9875 3.64009C53.1951 5.45572 56.8552 7.91978 59.9677 11.0323C63.0802 14.1448 65.5443 17.8049 67.3599 22.0125C69.1755 26.2201 70.0833 30.716 70.0833 35.5C70.0833 40.284 69.1755 44.7799 67.3599 48.9875C65.5443 53.1951 63.0802 56.8552 59.9677 59.9677C56.8552 63.0802 53.1951 65.5443 48.9875 67.3599C44.7799 69.1755 40.284 70.0833 35.5 70.0833ZM32.0417 62.9937V56.25C30.1396 56.25 28.5113 55.5727 27.1568 54.2182C25.8022 52.8637 25.125 51.2354 25.125 49.3333V45.875L8.52499 29.275C8.35207 30.3125 8.19357 31.35 8.04947 32.3875C7.90537 33.425 7.83332 34.4625 7.83332 35.5C7.83332 42.4743 10.1245 48.584 14.7068 53.8292C19.2891 59.0743 25.0674 62.1292 32.0417 62.9937ZM55.9042 54.175C57.0569 52.9069 58.0944 51.538 59.0167 50.0682C59.9389 48.5984 60.7026 47.071 61.3078 45.4859C61.913 43.9009 62.3741 42.2726 62.6911 40.601C63.0081 38.9295 63.1667 37.2292 63.1667 35.5C63.1667 29.8514 61.596 24.6927 58.4547 20.0239C55.3134 15.3552 51.1201 11.9833 45.875 9.90832V11.2917C45.875 13.1937 45.1977 14.822 43.8432 16.1766C42.4887 17.5311 40.8604 18.2083 38.9583 18.2083H32.0417V25.125C32.0417 26.1049 31.7102 26.9262 31.0474 27.5891C30.3845 28.2519 29.5632 28.5833 28.5833 28.5833H21.6667V35.5H42.4167C43.3965 35.5 44.2179 35.8314 44.8807 36.4943C45.5436 37.1571 45.875 37.9785 45.875 38.9583V49.3333H49.3333C50.8319 49.3333 52.1864 49.78 53.3969 50.6734C54.6073 51.5668 55.443 52.734 55.9042 54.175Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

function Features() {
  return (
    <div className="features-section">
      <div className="features-header">
        <button
          className="features-header-btn"
          style={{ backgroundColor: "white" }}
        >
          Our Features
        </button>
      </div>

      <div className="features-cards">
        {featuresData.map(({ id, svg, title, description, bgClass }) => (
          <div key={id} className={`feature-card ${bgClass}`}>
            <div className="feature-icon">{svg}</div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
