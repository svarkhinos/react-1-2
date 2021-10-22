// import PaintingList from './components/PaintingList';
// import Section from './components/section';
// import paintings from './painting.json';
import Alert from './components/Alert/Alert';
import Container from './components/Container/Container';
import Box from './components/Box/Box';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];
export default function App() {
  return (
    <div>
      <Container>
        <Alert text="hello my friend" type="success" />
        <Alert text="hello my friend" type="error" />
        <Alert text="hello my friend" type="warning" />
        {/* <ColorPicker options={colorPickerOptions} /> */}
        {/* <Section title="The BEST">
        <PaintingList items={paintings} />
      </Section> */}
        {/* <Section /> */}
      </Container>
      <Box type="small" classNames="big red" styles={{ color: `#fff` }} />
      <Box type="medium" />
      <Box type="large" />
    </div>
  );
}
