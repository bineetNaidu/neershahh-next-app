import { ContactUs } from '@/components/ContactUs';
import { PreWedding } from '@/components/PreWedding';
import { UploadMemories } from '@/components/UploadMemories';
import { WeddingEvents } from '@/components/WeddingEvents';
import { WeddingInfo } from '@/components/WeddingInfo';

export default function Home() {
  return (
    <main>
      <header className='bg-[url("/images/bg-banner-2.JPG")] min-w-full h-3/6 bg-no-repeat relative bg-cover bg-center overflow-hidden bg-fixed transition-all'>
        <div className="absolute top-0 right-0 left-0 bottom-0 bg-black opacity-50"></div>

        <article className="w-full min-h-screen h-full flex justify-center items-center -mt-20">
          <div className="flex flex-col items-center text-white z-10">
            <h1 className="lg:text-[100px] md:text-[80px] text-[50px] font-[Sacramento] transition-all drop-shadow-lg shadow-black">
              Jainam &amp; Sonal
            </h1>
            <h2 className="text-lg text-gray-300 drop-shadow-lg shadow-black">
              We are Getting Married
            </h2>
          </div>
        </article>
      </header>

      <WeddingInfo />

      <WeddingEvents />

      <UploadMemories />

      <hr className="w-11/12 mx-auto mb-10 border-dashed border-2" />

      <PreWedding />

      <ContactUs />
    </main>
  );
}
