import React from "react";
import { Babang } from "../fonts";

const AboutUs = () => {
  return (
    <div>
      <h1
        className={`${Babang.className} text-2xl mb-5 mt-5 text-center md:text-4xl`}
      >
        SOBRE NOSOTROS 💈
      </h1>
      <span className="flex text-center ml-[10%] mr-[10%] text-base font-serif md:text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id magna
        non urna tristique ullamcorper. Nam consequat lobortis lectus ac
        facilisis. Fusce leo est, aliquam sodales pretium vitae, tincidunt non
        erat. Nam congue justo eget consequat viverra. Quisque sodales facilisis
        pellentesque. Nulla facilisi. Vestibulum sit amet ultrices lacus.
        Pellentesque dictum lorem non rhoncus dapibus. Nullam placerat tortor
        felis, eget porta odio imperdiet vel. Aenean in sapien sollicitudin
        purus porttitor sollicitudin eu a tellus. Aliquam vitae sem et nisl
        dictum lacinia tincidunt vitae metus. Etiam a velit pellentesque,
        commodo risus vel, dapibus lorem. Proin et porttitor eros. In hac
        habitasse platea dictumst. Donec luctus elit quis neque auctor
        dignissim. Sed sed lectus eu quam pellentesque egestas sed sit amet
        mauris. Morbi nec dignissim purus. Vestibulum ultrices convallis dui at
        tristique. Aliquam erat volutpat. Donec condimentum, erat interdum
        tincidunt egestas, dui mauris rutrum odio, vehicula sodales elit nisl ac
        ex. Nulla lacinia augue libero, eget varius diam consectetur sed. Aenean
        tincidunt est vel nunc congue mollis. Interdum et malesuada fames ac
        ante ipsum primis in faucibus.
      </span>
    </div>
  );
};

export default AboutUs;
