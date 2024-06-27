import computerSetupOne from '../../public/computer-setup1.jpg'
import computerSetupTwo from '../../public/computer-setup2.jpg'
import computerSetupThree from '../../public/computer-setup3.jpg'
import computerSetupFour from '../../public/computer-setup4.jpg'
import { ParallaxContainer } from "@/components/parallax-content/ParallaxContainer";


export default function Home() {
  return (
    <main>
      <ParallaxContainer img={computerSetupOne} heading="Let's Go" subheading='The best is yet to come.'>
        
      </ParallaxContainer>
      <ParallaxContainer img={computerSetupTwo} heading="Let's Go" subheading='The best is yet to come.'>
        
      </ParallaxContainer>
      <ParallaxContainer img={computerSetupThree} heading="Let's Go" subheading='The best is yet to come.'>
        
      </ParallaxContainer>
      <ParallaxContainer img={computerSetupFour} heading="Let's Go" subheading='The best is yet to come.'>
        
      </ParallaxContainer>
    </main>
  );
}
