
import { ModelLinkCard } from '@/components/model-link-card';
import { CopyrightYear } from '@/components/copyright-year';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen p-4 sm:p-8 bg-background selection:bg-primary/30 selection:text-primary-foreground">
      <div className="w-full max-w-5xl flex justify-end px-4 pt-4">
        <ThemeToggle />
      </div>
      <header className="my-8 sm:my-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold font-headline text-foreground tracking-tight">
          PredictEdge
        </h1>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
          Dive into our range of innovative machine learning models. Choose any model to explore its specifics and experience its interactive capabilities.
        </p>
      </header>

      <div className="w-full max-w-2xl flex flex-col grow gap-8 px-4 animate-in fade-in-0 duration-700 delay-450">
        <ModelLinkCard
          modelName="Mental Health in Tech Workers"
          modelDescription="Predicts if a tech worker is at risk of mental health issues using data like work environment and mental health history."
          href="/model-alpha"
        />
        <ModelLinkCard
          modelName="Crop Grouping by Climate Requirements"
          modelDescription="Clusters crops based on their optimal growing conditions (e.g., rainfall, temperature) to recommend suitable crops for specific regions or climates."
          href="/model-beta"
        />
        <ModelLinkCard
          modelName="Fake vs. Real Account Classification"
          modelDescription="Predicts if a social media profile is fake or real using features like friend count, post activity, and likes."
          href="/model-gamma"
        />
      </div>
      <footer className="mt-16 mb-8 text-center text-muted-foreground text-sm">
        <p>&copy; <CopyrightYear /> PredictEdge. All rights reserved.</p>
      </footer>
    </main>
  );
}
