import Image from 'next/image';
import { StaticImageData } from 'next/image';
import Breville from '@/public/imgs/coffee/breville.jpg';
import D54 from '@/public/imgs/coffee/d54.jpg';
import WDT from '@/public/imgs/coffee/wdt.jpg'; // WISSXOER WDT Tool tool https://www.amazon.com/Espresso-Distribution-Stainless-Installed-Replacement/dp/B0BH8MRB2Z/ref=sr_1_6?crid=3G882IPZS6XLC&dib=eyJ2IjoiMSJ9.OHOquaT17mzFfUJtxtmu_0rEvxsygyU9czlrvafFXKS2yU9mX9zBVTzddZ2pK-EaWfps8Thd1mfz6UG3zaZtVI6q_odVxkU7AdUNywgeartTw4a4K4CedYuMgWNtg8vG8DKN8aJxxlwh8ywdfZoCU8FbNPu2Sigo6MS9JwKG1TfFl_EiP-3Lf0CtBq__58H3Ygg7_kw_yuWFGoIrUuIBaDfwD-HA4o0pVDgt8FIDr4n9nCAVBIl7l5oeXfqasvWVG3JJblgKpJdysWxS8AcjFa8hAizzsI99ixtl47EjHAY.c7GZd1TMDunFNaLm2rpYhpbw0M4YZiqD53Zx3jmrGI8&dib_tag=se&keywords=wdt%2Btool&qid=1726129170&sprefix=wdt%2Bto%2Caps%2C380&sr=8-6&th=1
import Tamper from '@/public/imgs/coffee/tamper.jpg'; // Normcore 58.5mm Coffee Tamper V4 https://www.amazon.com/Normcore-58-5mm-Coffee-Tamper-Spring-loaded/dp/B09BTLP4P1/ref=sr_1_1?crid=2GRJ98RHLWEK9&dib=eyJ2IjoiMSJ9.5ejPnTRsrxiwEuiBitw1Ory_SZd5lF5iLSR5Ji0zmMhXu3F-89r_GCQ42o4oprSTqjCWZy_yKZurTzg6Jj4FdvgPgYk7w4PffJBS9iJ4UYudH7GvJ4w8G8z-ExcmzJzeOMNwWfW7CsS12YhbmqVDWq4eP9LbivqPBursKTokbzFIL9NR4OUcgN4Ib4v81LqWosoc3-AUfNMboJhWQN_w8Lylmr6XPgJQC_m35btTd1ogVaQPXhYtKhqKCgq5NHIzpPzdSk24qrYoUulzEydorHslIIjPNhWUeBE4dE2PtaI.S6v2cVigl3-Bn1SLK5syNQgEFNztTcS-ckQP2af1ju0&dib_tag=se&keywords=nomcore&qid=1726129492&sprefix=nomc%2Caps%2C364&sr=8-1
import Funnel from '@/public/imgs/coffee/funnel.jpg'; // Normcore 58mm Magnetic Dosing Funnel V2 https://www.amazon.com/Normcore-58mm-Magnetic-Dosing-Funnel/dp/B0BLW6SKHL/ref=sr_1_2?crid=2PJCJYZIAKYDO&dib=eyJ2IjoiMSJ9.zdGUokKlqvRuYNbR1_EL7BuGT8lY9cTk4aZSNFGPcPRlKrhbePCxyBMXgRbikRjyn1dbZz1l1eUbBBao9Iq4IIP2VC4AJNYh2LuUyhnK0YquFenWwitgj1_-noAKNrYYRye9QerWknZg0kexTQXu7ECUMfiQPkj_WChatlVJhdaT522uzO5f0Xn6vRLZqIfsRF9NuIFcMpH_TaUcw3PYcz5NWkvWhRYXzVD73-KqDEdy8ASSMH4A6ntZioFiqrOTqVk7Hzm9kmIngViKvsskpqDvMh_-h_Ss35lWFUFurYs.b8lChUBwE0l9CZv9Rm-QUR5ORAYsLLFTCYcYIN2cQbM&dib_tag=se&keywords=nomcore%2B54%2Bdosing%2Bfunnel&qid=1726129649&sprefix=nomcore%2B54%2Bdosing%2Bfunn%2Caps%2C256&sr=8-2&th=1
import Box from '@/public/imgs/coffee/box.jpg'; // IKAPE Espresso Knock Box, Espresso Coffee Organizer Box https://www.amazon.com/IKAPE-Organizer-Distributor-Portafilter-Accessories/dp/B0C492RPFD/ref=sr_1_5?crid=12OSK86XK14HW&dib=eyJ2IjoiMSJ9.pMNLKqbEoP5Ko2VDAFVEe5xOa4Rd2ovRWqlaQ01Gw_C0A5BSziooCRghBLtpU4L2E7vW6zhIx4OdEBHIVUSXsB6U-RL3qRaeSz7HtG7YvvcZOR_8acG2D5A7nNsn0CzZQximtLrx6QDyHRkvixrx4IBOnQx6DCu8rU6JzjcqfIqQEtO4huOUgm26qgcpfUAmNaj5ey_zutGWEqALqZy5FdXICCfnSN1y6Wo4gckv4IQGPPQfVvq276koCIxRXYLIpbb5rrfCyOJSen28vaElgwg1koKnKwM4D3JhDuDd5wM.vSyvGSJRrwo65BMbf_YezFsrCBIw8sFQjCG0HuSSKOI&dib_tag=se&keywords=ikape%2Btamper%2Bstation&qid=1726129582&sprefix=Ikape%2Caps%2C267&sr=8-5&th=1
import Puck from '@/public/imgs/coffee/puck.jpg'; // Normcore 58.5mm Puck Screen - Lower Shower Screen https://www.amazon.com/Normcore-58-5mm-Espresso-Portafilter-Contact/dp/B09DDC7KMQ/ref=sr_1_3?crid=2JPML0XVIXK88&dib=eyJ2IjoiMSJ9.FMeNj50No2L0NfoHKGDrmAE7fY0lGZXHsMHu7qiHbiJtKU60XjsnG7cW8lsEydeiEw0Z4qRcWMjFG_jVCsOrRIEaqU6nbxFVFW0TP_rgZ-jCVEmR9Sr-DNdZI7O9t5AcWJPnaxPNE8_ctaY7YjL0PxXDyo2ms1H8pXbXDNKLc3jZmCjuIblW5GcwJOMDVGkyg2mPgiHeDjlJvTxsQ3Ph_SYda7Ae1G6UZvBLP94BsW1R1ENp5CJolJPbSjrj2QBuXn66XqlZ4zA1AQvxa_jo__l0coY13LkSh-0bZzQD8dg.4oc01wf9Krc_iVcBwQFxgl4mAuZ7Df4dN0MhWXW8Y6I&dib_tag=se&keywords=nomcore+puck+screen&qid=1726129707&sprefix=nomcore+p%2Caps%2C247&sr=8-3
import Blower from '@/public/imgs/coffee/blower.jpg'; // MHW-3BOMBER coffee grounds blower, https://www.amazon.com/MHW-3BOMBER-Blaster-Grinder-Air-move-Cleaning/dp/B09MMV86MZ/ref=sr_1_3?crid=RAU4P8DONB2F&dib=eyJ2IjoiMSJ9.dPcMY9LddiHE081uLrmUPphyPpgGFiLVXBREbU8XihJKT9W5tWAdOyXUOttZgp8HW_L2FpCUoFmW9GG1v6FwWoZUTyDJ4ejloD4dFnjidMRiU3jTqBuUVGYC6z7Hyf-wvKyz7STwtgo0PBJuXMMF-1Lw_YZkGJYDr7LiI8lZVBbOXCfff4eDtqv__j53Uh6G8le4KqfFLofLkCRxVYg2iqkujpWjIsiDKLWcXUbSGY__aJ7XJAx37FsPHfLxdg8SgOggfqhS3Euj1WrMgMMfSPQhzKznTs7FGkEW3yKykQc.K-mlWoEsPTxPZFAjjNW8cEUxNeT2VdbWcjeTs5mUoFs&dib_tag=se&keywords=coffee%2Bblower&qid=1726129799&sprefix=coffee%2Bblowe%2Caps%2C261&sr=8-3&th=1
import Scale from '@/public/imgs/coffee/scale.jpg'; // Scale CHWARES Food Scale https://www.amazon.com/CHWARES-Kitchen-Function-Digital-Dieting/dp/B0BWRY75H9/ref=sr_1_6?crid=1QRBV4HPO2LV2&dib=eyJ2IjoiMSJ9.h688GNX6ELHyzJQzDPQQjhpCZMewkTXpsnUai1hrPQu7kyRolldqOp7hjLYjxXqbPAI7Lphwzg3O4CX9MkDtBbDTiUapijeyp9X7ct-t3IXdbo8XoRvL2Y8tMaQQskFEs54AkkpkglP7rXrnGLYvp4xFZHnIC7TvMScfWBDyP3fGg-mTA-8897bWVNj9ECCFHXUM-02cKMf5dk5LVbsmgKZVcpMqIKsWZJG8rOISs8T4D5ZUi9cAQZd8XbJoqjhQVte_JSPN6N_sie-LFQ_OYYQskaZ4LCxKMgTx5hBmM5s.Z4J2ugQZYYh_i5ZyMbQpkQshK99tsScHNIxXNqQm94Q&dib_tag=se&keywords=food+scale+chwares+rechargeable&qid=1726129969&sprefix=food+scale+chwares+rechargab%2Caps%2C238&sr=8-6
import Frother from '@/public/imgs/coffee/frother.jpg'; //MF02 Rechargeable Milk Frother Handheld Foam Maker with Stainless Whisk https://www.amazon.com/FoodVille-MF02-Rechargeable-Bulletproof-Cappuccino/dp/B07HSQKG3J/ref=sr_1_5?crid=3BA1GQSIZT4X7&dib=eyJ2IjoiMSJ9.22IjKruRf5Yg0MXVnCMUibddFknzW_-nogbrew0CVK9P69l6FxeSH-R9PzAPCGO-GAjJr9WqtEhFGf5XeyGQs0-v6aMGefZ4fHp6u1iNWt0YUIxjufj91ms5viKv-Hj7Z_S9oiiieB5or5Qp2IQIawSJ7uGgd6q0IhudX2kXN_b4bf2m4QkgzMgXgo2tFBkK_ZpJK-a-7cJY4Fj23P26QI-1cC8o67xZkMVHCWKtqAlZVv44VZufeLm0leDBFwd42eQJ2Q_5O7b3Ty46F6LtLHAb_KSsWwSDd-kdFa9mNXA.lMUWR7qeSXBezGUu_3w8i4Bi87Fcrr4drfJZJjUjIqk&dib_tag=se&keywords=rechargeable%2Bmixer&qid=1726130073&sprefix=rechargeable%2Bmix%2Caps%2C354&sr=8-5&th=1
import Clean from '@/public/imgs/coffee/clean.jpg';
import Cloth from '@/public/imgs/coffee/cloth.jpg';

const coffeeEquipment = [
  {
    src: Breville,
    alt: 'Breville',
    title: 'Breville Infuser',
    description: 'Espresso machine: has preinfusion',
    link: 'https://www.amazon.com/Breville-BES840XL-Infuser-Espresso-Machine/dp/B0089SSOR6/ref=sr_1_1?crid=HNBDMY4GLJRX',
  },
  {
    src: Funnel,
    alt: 'Funnel',
    title: 'Normcore 58mm Magnetic Dosing Funnel V2',
    description: 'Dosing funnel for grinder',
    link: 'https://www.amazon.com/Normcore-58mm-Magnetic-Dosing-Funnel/dp/B0BLW6SKHL/ref=sr_1_2?crid=2PJCJYZIAKYDO',
  },
  {
    src: Scale,
    alt: 'Scale',
    title: 'CHWARES Food Scale',
    description: 'Scale to measure coffee beans',
    link: 'https://www.amazon.com/CHWARES-Kitchen-Function-Digital-Dieting/dp/B0BWRY75H9',
  },
  {
    src: D54,
    alt: 'd54',
    title: 'D54',
    description: 'Stepless Flat Burr Grinder',
    link: 'https://www.amazon.com/MiiCoffee-DF54-Single-Coffee-Grinder/dp/B0D1NMR67G',
  },
  {
    src: Box,
    alt: 'IKAPE Espresso Knock Box, Espresso Coffee Organizer Box',
    title: 'IKAPE Espresso Knock Box',
    description: 'Espresso Coffee Organizer Box',
    link: 'https://www.amazon.com/IKAPE-Organizer-Distributor-Portafilter-Accessories/dp/B0C492RPFD/ref=sr_1_5?crid=12OSK86XK14HW&dib=eyJ2IjoiMSJ9.pMNLKqbEoP5Ko2VDAFVEe5xOa4Rd2ovRWqlaQ01Gw_C0A5BSziooCRghBLtpU4L2E7vW6zhIx4OdEBHIVUSXsB6U-RL3qRaeSz7HtG7YvvcZOR_8acG2D5A7nNsn0CzZQximtLrx6QDyHRkvixrx4IBOnQx6DCu8rU6JzjcqfIqQEtO4huOUgm26qgcpfUAmNaj5ey_zutGWEqALqZy5FdXICCfnSN1y6Wo4gckv4IQGPPQfVvq276koCIxRXYLIpbb5rrfCyOJSen28vaElgwg1koKnKwM4D3JhDuDd5wM.vSyvGSJRrwo65BMbf_YezFsrCBIw8sFQjCG0HuSSKOI&dib_tag=se&keywords=ikape%2Btamper%2Bstation&qid=1726129582&sprefix=Ikape%2Caps%2C267&sr=8-5&th=1',
  },
  {
    src: Frother,
    alt: 'Frother',
    title: 'MF02 Rechargeable Milk Frother Handheld Foam Maker',
    description: 'Frother',
    link: 'https://www.amazon.com/FoodVille-MF02-Rechargeable-Bulletproof-Cappuccino/dp/B07HSQKG3J',
  },
  {
    src: WDT,
    alt: 'WISSXOER WDT Tool',
    title: 'WISSXOER WDT Tool',
    description: 'WDT Tool to evenly distribute coffee grounds',
    link: 'https://www.amazon.com/Espresso-Distribution-Stainless-Installed-Replacement/dp/B0BH8MRB2Z/ref=sr_1_6?crid=3G882IPZS6XLC&dib=eyJ2IjoiMSJ9.OHOquaT17mzFfUJtxtmu_0rEvxsygyU9czlrvafFXKS2yU9mX9zBVTzddZ2pK-EaWfps8Thd1mfz6UG3zaZtVI6q_odVxkU7AdUNywgeartTw4a4K4CedYuMgWNtg8vG8DKN8aJxxlwh8ywdfZoCU8FbNPu2Sigo6MS9JwKG1TfFl_EiP-3Lf0CtBq__58H3Ygg7_kw_yuWFGoIrUuIBaDfwD-HA4o0pVDgt8FIDr4n9nCAVBIl7l5oeXfqasvWVG3JJblgKpJdysWxS8AcjFa8hAizzsI99ixtl47EjHAY.c7GZd1TMDunFNaLm2rpYhpbw0M4YZiqD53Zx3jmrGI8&dib_tag=se&keywords=wdt%2Btool&qid=1726129170&sprefix=wdt%2Bto%2Caps%2C380&sr=8-6&th=1',
  },
  {
    src: Puck,
    alt: 'Normcore 58.5mm Puck Screen',
    title: 'Normcore 58.5mm Puck Screen',
    description: 'Puck Screen for portafilter',
    link: 'https://www.amazon.com/Normcore-58-5mm-Espresso-Portafilter-Contact/dp/B09DDC7KMQ/ref=sr_1_3?crid=2JPML0XVIXK88&dib=eyJ2IjoiMSJ9.FMeNj50No2L0NfoHKGDrmAE7fY0lGZXHsMHu7qiHbiJtKU60XjsnG7cW8lsEydeiEw0Z4qRcWMjFG_jVCsOrRIEaqU6nbxFVFW0TP_rgZ-jCVEmR9Sr-DNdZI7O9t5AcWJPnaxPNE8_ctaY7YjL0PxXDyo2ms1H8pXbXDNKLc3jZmCjuIblW5GcwJOMDVGkyg2mPgiHeDjlJvTxsQ3Ph_SYda7Ae1G6UZvBLP94BsW1R1ENp5CJolJPbSjrj2QBuXn66XqlZ4zA1AQvxa_jo__l0coY13LkSh-0bZzQD8dg.4oc01wf9Krc_iVcBwQFxgl4mAuZ7Df4dN0MhWXW8Y6I&dib_tag=se&keywords=nomcore+puck+screen&qid=1726129707&sprefix=nomcore+p%2Caps%2C247&sr=8-3',
  },
  {
    src: Clean,
    alt: 'Cleaning Tablets',
    title: 'Urnex Cafiza',
    description: 'Cleaning Tablets',
    link: 'https://www.amazon.com/Urnex-Espresso-Machine-Cleaner-Tablets/dp/B001VEFXRO',
  },
  {
    src: Tamper,
    alt: 'Normcore 58.5mm Coffee Tamper V4',
    title: 'Normcore 58.5mm Coffee Tamper V4',
    description: 'Coffee Tamper',
    link: 'https://www.amazon.com/Normcore-58-5mm-Coffee-Tamper-Spring-loaded/dp/B09BTLP4P1/ref=sr_1_1?crid=2GRJ98RHLWEK9&dib=eyJ2IjoiMSJ9.5ejPnTRsrxiwEuiBitw1Ory_SZd5lF5iLSR5Ji0zmMhXu3F-89r_GCQ42o4oprSTqjCWZy_yKZurTzg6Jj4FdvgPgYk7w4PffJBS9iJ4UYudH7GvJ4w8G8z-ExcmzJzeOMNwWfW7CsS12YhbmqVDWq4eP9LbivqPBursKTokbzFIL9NR4OUcgN4Ib4v81LqWosoc3-AUfNMboJhWQN_w8Lylmr6XPgJQC_m35btTd1ogVaQPXhYtKhqKCgq5NHIzpPzdSk24qrYoUulzEydorHslIIjPNhWUeBE4dE2PtaI.S6v2cVigl3-Bn1SLK5syNQgEFNztTcS-ckQP2af1ju0&dib_tag=se&keywords=nomcore&qid=1726129492&sprefix=nomc%2Caps%2C364&sr=8-1',
  },
  {
    src: Blower,
    alt: 'Blower',
    title: 'MHW-3BOMBER',
    description: 'Coffee Grounds Blower',
    link: 'https://www.amazon.com/MHW-3BOMBER-Blaster-Grinder-Air-move-Cleaning/dp/B09MMV86MZ/ref=sr_1_3?crid=RAU4P8DONB2F&dib=eyJ2IjoiMSJ9.dPcMY9LddiHE081uLrmUPphyPpgGFiLVXBREbU8XihJKT9W5tWAdOyXUOttZgp8HW_L2FpCUoFmW9GG1v6FwWoZUTyDJ4ejloD4dFnjidMRiU3jTqBuUVGYC6z7Hyf-wvKyz7STwtgo0PBJuXMMF-1Lw_YZkGJYDr7LiI8lZVBbOXCfff4eDtqv__j53Uh6G8le4KqfFLofLkCRxVYg2iqkujpWjIsiDKLWcXUbSGY__aJ7XJAx37FsPHfLxdg8SgOggfqhS3Euj1WrMgMMfSPQhzKznTs7FGkEW3yKykQc.K-mlWoEsPTxPZFAjjNW8cEUxNeT2VdbWcjeTs5mUoFs&dib_tag=se&keywords=coffee%2Bblower&qid=1726129799&sprefix=coffee%2Bblowe%2Caps%2C261&sr=8-3&th=1',
  },
  {
    src: Cloth,
    alt: 'Cloth',
    title: 'Amazon Basics Microfiber Cleaning Cloths',
    description: 'Microfiber cloth for clean up',
    link: 'https://www.amazon.com/AmazonBasics-CW190423-24-Pack-Microfiber-Cleaning/dp/B009FUF6DM',
  },
];

type CoffeeEquipment = {
  src: StaticImageData;
  alt: string;
  title: string;
  description: string;
  link: string;
};

const chunkedCoffeeEquipment: Array<Array<CoffeeEquipment>> = [];
for (let i = 0; i < coffeeEquipment.length; i += 3) {
  chunkedCoffeeEquipment.push(coffeeEquipment.slice(i, i + 3));
}

export default function Hobbies() {
  return (
    <div
      id="hobbies"
      className="text-background scroll-mt-4 pb-16 lg-pc:scroll-mt-8 mobile:scroll-mt-20 mobile:pb-10"
    >
      <h1 className="pb-4 text-3xl font-bold lg-pc:text-5xl">My Hobbies</h1>
      <div className="lg-pc:text-3xl">
        <p>
          When I&apos;m not coding, I like to play videogames and hit the gym.
          My favorite day is chest day, but my favorite exercise is reverse
          curls!
        </p>
        <p>
          Recently, I started my espresso journey and built a home cafe station!
          My favorite drinks are oat lattes and cold brews with vanilla sweet
          cold foam. In my free time, I love experimenting with different coffee
          beans and tweaking various variables to craft different delicious
          coffee drinks for my family to enjoy.
        </p>

        <p className="py-4 text-2xl font-bold lg-pc:text-4xl">
          My Coffee Equipment:
        </p>

        <div className="grid grid-cols-4 gap-4 mobile:grid-cols-2">
          {chunkedCoffeeEquipment.map((chunk, index) => (
            <div key={index} className="grid gap-4">
              {chunk.map((item, itemIndex) => (
                <a
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  className="ring-ring group relative max-w-full rounded-lg bg-white object-cover object-center lg-pc:rounded-2xl"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    className="max-h-72 w-full rounded-lg object-contain p-4 py-4 lg-pc:max-h-96 lg-pc:rounded-2xl mobile:max-h-40"
                  />

                  {/* Overlay */}
                  <div className="bg-muted-opacity-80 absolute inset-0 flex flex-col items-center justify-center rounded-lg p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg-pc:rounded-2xl">
                    <div className="text-center text-2xl font-bold mobile:text-base">
                      {item.title}
                    </div>
                    <div className="mt-2 text-center mobile:text-sm">
                      {item.description}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
