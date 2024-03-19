import PageHeader from '@shared/PageHeader';
import ProjectCard from '@shared/ProjectCard';
import ReviewCard from '@shared/ReviewCard';
import SectionHeader from '@shared/SectionHeader';
import ServiceCard from '@shared/ServiceCard';

export default function Home() {
  return (
    <main>
      <SectionHeader title='Hello World' />
      <PageHeader pageName='Project' />
      <ServiceCard />
      <ProjectCard />
      <ReviewCard />
    </main>
  );
}
