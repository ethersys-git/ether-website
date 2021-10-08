import React from "react";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import {
  capture_and_control_icon,
  cloud_computing_icon,
  edge_computing_icon,
  industrial_security_icon,
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  solution1,
  solution2,
  solution3,
} from "../../assets/images";
import { Footer } from "../../components/footer";
import { Marginer } from "../../components/marginer";
import { theme } from "../../theme";
import { MoreAboutSection } from "./moreAboutSection";
import { ReviewsSection } from "./reviewsSection";
import { ServicesSection } from "./servicesSection";
import { TopSection } from "./topSection";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CoreOfferingCards = ({ title, description, icon, reverse }) => {
  return (
    <div
      style={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flex: 1,
        minWidth: 400,
        margin: 20,
      }}
    >
      <img src={icon} style={{ height: 100, width: 100 }} />
      <h2 style={{ color: reverse ? "#4054b2" : "#fff", margin: 20 }}>
        {title}
      </h2>
      <p style={{ color: reverse ? "#4054b2" : "#fff", margin: 10 }}>
        {description}
      </p>
    </div>
  );
};

const coreoffering = [
  {
    title: "Industrial IoT 4.0",
    description:
      "Industry 4.0 spans the entire ecosystem - sales, inventory, scheduling, quality, engineering, consumers and field maintenance. Flow of Information is constantly maintained enabling up-to-date production, processes and timely analytics",
  },
  {
    title: "Building Management System",
    description:
      " BMS automates the processes and Provides visibility and control over the work space via interaction between nodes and sensors which manages the ease of workflow.",
  },
  {
    title: "Energy - Management System",
    description:
      "EMS optimize the performance of the use of energy system. Enabling to be used in either small scale or large scale network.",
  },
];

const techoffering = [
  {
    title: "Edge Computing",
    description:
      "IEdge computing is a computing paradigm which brings computation and data storage closer.",
    icon: edge_computing_icon,
  },
  {
    title: "Capture and Control",
    description:
      "Ethersys enables you to access and control your IoT devices and maintain your bussiness.",
    icon: capture_and_control_icon,
  },
  {
    title: "Cloud Computing",
    description:
      "Cloud computing provides on-demand availability of computer system resources.",
    icon: cloud_computing_icon,
  },
  {
    title: "Industrial Security",
    description:
      "Ethersys provides a revolutionary and advanced security systems protecting your data and industry",
    icon: industrial_security_icon,
  },
];

const OfferingComponent = ({ title, data, reverse }) => {
  return (
    <div
      style={{
        backgroundColor: reverse ? "#fff" : "#4054b2",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1 style={{ color: !reverse ? "#fff" : "#074d99", alignSelf: "center" }}>
        {title}
      </h1>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          padding: 40,
          flexWrap: "wrap",
        }}
      >
        {data.map((item) => {
          return <CoreOfferingCards {...item} reverse={reverse} />;
        })}
      </div>
    </div>
  );
};

const solutionData = {
  title: "Our Solutions",
  description:
    "We brings our long-standing expertise and provide the most advanced and efficient solution in cloud, edge computing and embedded systems for IoT-based and Enterprise grade to Industry, Smart City, Campus and Office deployments.",
  images: [solution1, solution2, solution3],
};
const productata = {
  title: "Our Products",
  description:
    "Our solution comprises of various Products in Edge, Cloud and Application which serve in Industries and for Building Management system and Energy Management system",
  images: [product1, product2, product3, product4, product5, product6],
};

const PartitionWithCaraousal = ({ title, description, images, reverse }) => {
  return (
    <div style={{ display: "flex", padding: 20 }}>
      {reverse && (
        <Carousel
        showThumbs={false}
        autoPlay
        showArrows
        interval={1500}
        infiniteLoop
        width={400}
        showStatus={false}
        showIndicators={false}
        >
          {images.map((item) => {
            return <img src={item} style={{ width: 200, height: 300 }} />;
          })}
        </Carousel>
      )}
      <div style={{}}>
        <h2>{title}</h2>
        <h4>{description}</h4>
      </div>
      {!reverse && (
        <Carousel
          showThumbs={false}
          autoPlay
          showArrows
          interval={1500}
          infiniteLoop
          width={400}
          showStatus={false}
          showIndicators={false}
        >
          {images.map((item) => {
            return <img src={item} style={{ width: 200, height: 200 }} />;
          })}
        </Carousel>
      )}
    </div>
  );
};

export function Homepage(props) {
  const { reverse } = props;
  return (
    <PageContainer>
      <TopSection />
      <OfferingComponent data={coreoffering} title={"Core Offering"} />
      <OfferingComponent
        data={techoffering}
        title={"Technology Offering"}
        reverse
      />
      <PartitionWithCaraousal {...solutionData} />
      <PartitionWithCaraousal {...productata} reverse />

      <ServicesSection />
      <Marginer direction="vertical" margin="2em" />
      <ReviewsSection />
      <MoreAboutSection />
      <Marginer direction="vertical" margin="8em" />
      <Footer />
    </PageContainer>
  );
}