import { BlobImage } from '../components/BlobImage';
import Button from '../components/Button';
import { Icon } from '../components/Icon';
import { InstagramIcon, PhoneIcon, EmailIcon } from '../components/Icons';
import { Text } from '../components/Text';
import TextPanel from '../components/TextPanel';
import dogMainImage from '../assets/dog_main.webp';

export default function Home() {
  return (
    <>
      <div className="relative z-10">
        <div className="flex flex-col items-center gap-8 max-w-md mx-auto py-8 px-4">
          {/* Title Panels */}
          <div className="flex flex-col gap-2 w-full">
            <TextPanel variant="pink" size="md">
              PSOTNY DOMEK
            </TextPanel>
            <TextPanel variant="green" size="md">
              RADOSNA
            </TextPanel>
            <TextPanel variant="blue" size="md">
              DOMOWA
            </TextPanel>
            <TextPanel variant="green" size="md">
              ZAUFANA
            </TextPanel>
            <TextPanel variant="blue" size="md">
              OPIEKA
            </TextPanel>
            <TextPanel variant="pink" size="md">
              PETSITTERA :)
            </TextPanel>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 w-full justify-center">
            <Button variant="pink">O mnie</Button>
            <Button variant="blue">Cennik</Button>
            <Button variant="green">Kontakt</Button>
          </div>

          {/* Profile Image */}
          <BlobImage
            variant="blue"
            size="lg"
            src={dogMainImage}
            alt="Dog in the grass"
          />

          {/* About Section */}
          <TextPanel variant="pink" size="lg">
            <Text>
              Cześć :) Mam na imię Nikola, pochodzę z Rybnika, a obecnie
              mieszkam w Katowicach. Z zawodu jestem behawiorystką i
              zoopsychologiem, kocham zwierzęta - koty, psy, papugi, króliki i
              bezpaństwa, jak ważne jest dla Ciebie bezpieczeństwo oraz dobre
              samopoczucie pupila podczas spaceru - spędzę, daty nocuł aby jak w
              domu :) Każdy weteran przebywający pod moją opieką ma zapewnioną
              pełną uwagę, spacery, aktywność i naukę. Chętnie zaopiekuję się
              Twoim milusińskim i wyprowadzę. Chętnie zaopiekuję się Twoim
              milusińskim w każdej porze dnia i nocy :) Możesz śledzić nas na
              instagramie PsotnyDomek lub zadzwoń +48 456 345
            </Text>
          </TextPanel>

          {/* Certificates */}
          <div className="flex flex-col gap-4">
            <BlobImage
              variant="green"
              size="md"
              src="/certificates/cert1.jpg"
              alt="Training Certificate 1"
            />
            <BlobImage
              variant="pink"
              size="md"
              src="/certificates/cert2.jpg"
              alt="Training Certificate 2"
            />
          </div>

          {/* Pricing Section */}
          <TextPanel variant="blue" size="lg">
            <div className="flex flex-col gap-6">
              <Text size="xl" weight="bold">
                Cennik
              </Text>

              <div className="flex flex-col gap-2">
                <Text size="lg" weight="semibold">
                  Spacer
                </Text>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <Text size="base">30 minut - 15zł</Text>
                  </li>
                  <li>
                    <Text size="base">30 minut - 20zł</Text>
                  </li>
                  <li>
                    <Text size="base">40 minut - 25zł</Text>
                  </li>
                  <li>
                    <Text size="base">60 minut - 30zł</Text>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <Text size="lg" weight="semibold">
                  Wizyty domowe
                </Text>
                <Text size="base">
                  (w mieszkaniu pod lub nad tobą, spacer, zabawa, sprzątanie,
                  kuwety, klatki)
                </Text>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <Text size="base">30 minut - 30zł</Text>
                  </li>
                  <li>
                    <Text size="base">60 minut - 40zł</Text>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <Text size="lg" weight="semibold">
                  Nocleg całodobowa opieka
                </Text>
                <Text size="base">
                  (w cenie spacery, zabawy, karmienie, sprzątanie)
                </Text>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <Text size="base">1 noc - 50zł (rabat 10%)</Text>
                  </li>
                  <li>
                    <Text size="base">2 noce - 140zł (rabat 15%)</Text>
                  </li>
                  <li>
                    <Text size="base">3 noce - 180zł (rabat 20%)</Text>
                  </li>
                  <li>
                    <Text size="base">4 noce - 220zł (rabat 20%)</Text>
                  </li>
                  <li>
                    <Text size="base">+ każda następna noc 50zł</Text>
                  </li>
                </ul>
              </div>
            </div>
          </TextPanel>

          {/* Contact Section */}
          <div className="flex flex-col gap-4 w-full">
            <TextPanel variant="pink" size="md">
              <div className="flex items-center gap-2">
                <Icon variant="pink" size="md">
                  <InstagramIcon />
                </Icon>
                <Text>psotnydomek</Text>
              </div>
            </TextPanel>

            <TextPanel variant="pink" size="md">
              <div className="flex items-center gap-2">
                <Icon variant="pink" size="md">
                  <PhoneIcon />
                </Icon>
                <Text>+48 456 345</Text>
              </div>
            </TextPanel>

            <TextPanel variant="pink" size="md">
              <div className="flex items-center gap-2">
                <Icon variant="pink" size="md">
                  <EmailIcon />
                </Icon>
                <Text>psotnydomek@gmail.eu</Text>
              </div>
            </TextPanel>
          </div>
        </div>
      </div>
    </>
  );
}
