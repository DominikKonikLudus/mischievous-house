import Button from "@/components/Button";
import TextPanel from "@/components/TextPanel";
import { Text } from "@/components/Text";
import { BlobImage } from "@/components/BlobImage";
import { Icon } from "@/components/Icon";
import InstagramIcon from "@/components/Icons/InstagramIcon";
import PhoneIcon from "@/components/Icons/PhoneIcon";
import EmailIcon from "@/components/Icons/EmailIcon";

export default function Debug() {
  return (
    <div className="max-w-4xl mx-auto">
        <Text size="2xl" weight="bold" textColor="black">debug route</Text>
        <div className="space-y-6">
          <div className="space-x-4">
            <Button>Default Button</Button>
            <Button variant="blue">blue</Button>
            <Button variant="green">green</Button>
            <Button variant="pink">pink</Button>
          </div>

          <div className="space-x-4">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>

          <div className="space-x-4">
            <Button variant="blue" size="lg" isLoading>Loading</Button>
            <Button variant="green" className="w-40">Custom Width</Button>
          </div>

          <div className="space-x-4">
            <BlobImage src="/src/assets/dog_main.webp" alt="Dog" variant="blue" size="sm" />
            <BlobImage src="/src/assets/dog_main.webp" alt="Dog" variant="pink" size="md" />
            <BlobImage src="/src/assets/dog_main.webp" alt="Dog" variant="green" size="lg" />
          </div>

          <div className="space-x-4">
            <Icon variant="pink" size="sm">
              <InstagramIcon />
            </Icon>
            <Icon variant="green" size="md">
              <PhoneIcon />
            </Icon>
            <Icon variant="blue" size="lg">
              <EmailIcon />
            </Icon>
          </div>

          <div className="space-y-4 mt-4">
            <TextPanel>
              This is a default text panel with medium size
            </TextPanel>
            <TextPanel variant="pink" size="sm">
              This is a pink text panel with small size
            </TextPanel>
            <TextPanel variant="green" size="lg">
              This is an green text panel with large size
            </TextPanel>
            <TextPanel variant="blue" size="md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </TextPanel>
          </div>
        </div>
    </div>
  )
} 