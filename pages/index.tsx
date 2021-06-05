import {
  Layout,
  ContentFrame,
  Hero,
  ContentCards,
} from '../lib/components';

export default function Home() {
  return (
    <Layout>
      <ContentFrame>
        <Hero />
        <ContentCards />
      </ContentFrame>
    </Layout>
  );
}
