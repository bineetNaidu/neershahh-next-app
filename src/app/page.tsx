import { ContactUs } from '@/components/ContactUs';
import { UploadMemories } from '@/components/UploadMemories';
import { WeddingEvents } from '@/components/WeddingEvents';
import { WeddingInfo } from '@/components/WeddingInfo';

export default function Home() {
  return (
    <main>
      <header className='bg-[url("/images/img_bg_2.jpg")] min-w-full min-h-screen h-full bg-no-repeat relative bg-cover bg-center overflow-hidden bg-fixed transition-all'>
        <div className="absolute top-0 right-0 left-0 bottom-0 bg-black opacity-50"></div>

        <article className="w-full min-h-screen h-full flex justify-center items-center">
          <div className="flex flex-col items-center text-white z-10">
            <h1 className="lg:text-[100px] md:text-[80px] text-[50px] font-[Sacramento] transition-all">
              Jainam &amp; Sonal
            </h1>
            <h2 className="text-lg">We are Getting Married</h2>

            <button className="px-5 py-3 bg-white text-pink-600 rounded-full mt-7 outline-none hover:bg-slate-200 transition-all hover:scale-105 active:scale-95">
              Save the date
            </button>
          </div>
        </article>
      </header>

      <WeddingInfo />

      <WeddingEvents />

      <UploadMemories />

      <hr className="w-11/12 mx-auto mb-10 border-dashed border-2" />

      <div className="flex flex-col items-center my-20 w-full md:w-10/12 mx-auto bg-gray-100 p-10 rounded-lg text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-[Sacramento] my-8 font-semibold text-pink-500">
          Pre-Wedding Shoot
        </h1>
        <p>
          From laughs to love, our pre-wedding adventure is a rom-com in
          motion!.
        </p>

        <div className="flex flex-col md:flex-row gap-4 my-10">
          <div className="flex-1">
            <h3 className="text-xl font-medium mb-2">TWO HEARTS, ONE STORY</h3>
            <p>
              Join the soon-to-be newlyweds on a rollercoaster of love,
              laughter, and adorable antics as they embark on their pre-wedding
              escapade. This video is proof that even before they say &apos;I
              do,&apos; they&apos;ve already mastered the art of &apos;We
              do&apos;! From sweet stolen glances to some not-so-graceful dance
              moves, this pre-wedding shoot captures their love story in all its
              candid, quirky glory. Get ready for a heartwarming dose of
              romance, sprinkled with just the right amount of sarcasm to keep
              you smiling. After all, who said love can&apos;t be sweet, funny,
              and a little sarcastic all at once? Click play and prepare to be
              thoroughly entertained!
            </p>
          </div>
          <div className='flex-1 bg-[url("/images/img_bg_2.jpg")] transition-all w-full rounded-lg m-8'></div>
        </div>
      </div>

      <ContactUs />
    </main>
  );
}
