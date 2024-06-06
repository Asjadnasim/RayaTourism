import AboutSection6 from '@/components/Home/AboutSection6';
import DestinationSection5 from '@/components/Home/DestinationSection5';
import FlightSection4 from '@/components/Home/FlightSection4';
import InputForm from '@/components/Home/Form';
import HotelSection7 from '@/components/Home/HotelSection7';
import Section1 from '@/components/Home/Section1';
import Section3 from '@/components/Home/Section3';
import VisaSection2 from '@/components/Home/VisaSection2';

export default function Home() {
	return (
		<div>
			<Section1 />
			<InputForm />
			<VisaSection2 />
			<Section3 />
			<FlightSection4 />
			<DestinationSection5 />
			<AboutSection6 />
			<HotelSection7 />
		</div>
	);
}
