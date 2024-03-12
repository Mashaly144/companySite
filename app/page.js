import ProjectCard from '@shared/ProjectCard';
import SectionHeader from '@shared/SectionHeader';
import ServiceCard from '@shared/ServiceCard';

export default function Home() {
  return (
    <main>
      <SectionHeader title='Hello World' />
      <ServiceCard />
      <ProjectCard />
    </main>
  );
}
