import { BeerRandomCard } from './BeerRandomCard';

const BeerRandomSection: React.FunctionComponent<{
  count: number;
}> = ({ count }) => {
  return (
    <aside>
      {Array.from({ length: count }).map((_, index) => (
        <BeerRandomCard key={index} id={index + 1} />
      ))}
    </aside>
  );
};

export { BeerRandomSection };
