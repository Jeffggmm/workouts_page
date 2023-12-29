import Stat from '@/components/Stat';
import useActivities from '@/hooks/useActivities';

// only support China for now
const LocationSummary = () => {
  const { years, countries, provinces, cities } = useActivities();
  return (
    <div style={{ cursor: 'pointer' }}>
      <section>
        {years ? <Stat value={`${years.length}`} description=" 年里我的运动足迹遍及" /> : null}
        {countries ? <Stat value={countries.length} description="/193 个国家" /> : null}
        {provinces ? <Stat value={provinces.length} description="/34 个中国省份" /> : null}
        {cities ? (
          <Stat value={Object.keys(cities).length} description="/338 个中国城市" />
        ) : null}
      </section>
      <hr color="red" />
    </div>
  );
};

export default LocationSummary;
