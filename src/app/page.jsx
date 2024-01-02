import SliderBanner from '@/app/components/SliderBanner/SliderBanner';
import Features from '@/app/components/Features/Features';
import About from '@/app/components/About/About';
import Services from '@/app/components/Services/Services';
import Cta from '@/app/components/Cta/Cta';
import Team from '@/app/components/Team/Team';
import WorkProcess from '@/app/components/WorkProcess/WorkProcess';
import FunFacts from '@/app/components/FunFacts/FunFacts';
import Departments from '@/app/components/Departments/Departments';
import Testimonial from '@/app/components/Testimonial/Testimonial';
import Partners from '@/app/components/Partners/Partners';
import HomeBlog from '@/app/components/HomeBlog/HomeBlog';
import Contact from '@/app/components/Contact/Contact';

const Home = () => {
    return (
        <main>
            <SliderBanner />
            <Features />
            <About />
            <Services />
            <Cta />
            <Team />
            <WorkProcess />
            <FunFacts />
            <Departments />
            <Testimonial />
            <Partners />
            <HomeBlog />
            <Contact />
        </main>
    );
};

export default Home;
