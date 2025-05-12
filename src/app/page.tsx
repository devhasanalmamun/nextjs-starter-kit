import FormInput from "@/components/form/FormInput";
import { Button } from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";

export default function Home() {
  return (
    <div>
      <Heading variant="h2">Sub Title</Heading>
      <Button variant="secondary">Submit</Button>

      <form>
        <FormInput label="Email" type="email" required />
        <FormInput label="Password" type="password" required />
      </form>
    </div>
  );
}
