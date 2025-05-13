import FormInput from "@/components/form/FormInput";
import { Button } from "@/components/ui/Button";
import Counter from "@/components/ui/Counter";
import Heading from "@/components/ui/Heading";

export default function Home() {
  console.log("Counter import check:", Counter, Counter.Label);
  return (
    <div>
      <Heading variant="h2">Sub Title</Heading>
      <Button variant="secondary">Submit</Button>

      <form>
        <FormInput label="Email" type="email" required />
        <FormInput label="Password" type="password" required />
      </form>

      <Counter>
        <Counter.Label>Basic Compound Counter</Counter.Label>
        <Counter.Count />
        <Counter.Increase icon="➕" />
        <Counter.Decrease icon="➖" />
      </Counter>
    </div>
  );
}
