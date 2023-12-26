import Reveal from "../Reveal/Reveal";
import Gadjet from "../Gadjet/Gadjet";

const Hero = () => {
  return (
    <>
      <Gadjet />
      <Reveal>
        <h1>Lorem ipsum dolor sit amet.</h1>
      </Reveal>
      <Reveal>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam modi
          quis tempora tempore ducimus reiciendis voluptas, nisi rem rerum eos.
        </p>
      </Reveal>
    </>
  );
};

export default Hero;
