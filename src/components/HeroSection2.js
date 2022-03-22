import React from "react";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";

function HeroSection2(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={1}
          spaced={true}
          className="has-text-centered"
        />
      </div>
    </Section>
  );
}

export default HeroSection2;
