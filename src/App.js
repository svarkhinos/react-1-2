import PaintingList from './components/paintingList';
import Section from './components/section';
import paintings from './painting.json';

export default function App() {
  return (
    <div>
      <Section title="The BEST">
        <PaintingList items={paintings} />
      </Section>
      <Section />
    </div>
  );
}
