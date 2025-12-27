import CoinOverview from '@/components/home/CoinOverview';
import { CoinOverviewFallback } from '@/components/home/fallback';
import TrendingCoins from '@/components/home/TrendingCoins';
import { Suspense } from 'react';

const Page = async () => {
  return (
    <main className="main-container">
      <section className="home-grid">
        <Suspense fallback={<CoinOverviewFallback />}>
          <CoinOverview />
        </Suspense>
      </section>

      <section className="w-full mt-7 space-y-4">
        <Suspense fallback={<div>Loading Trending Coins...</div>}>
          <TrendingCoins />
        </Suspense>
      </section>
    </main>
  );
};

export default Page;
