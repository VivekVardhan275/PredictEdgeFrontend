
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, PlayCircle } from 'lucide-react';
import { CopyrightYear } from '@/components/copyright-year';
import { ThemeToggle } from '@/components/theme-toggle';

export default function ModelBetaPage() {
  const modelName = "Crop Grouping by Climate Requirements";
  const modelPageDescription = "This model clusters crops based on their optimal growing conditions, analyzing factors like rainfall, temperature, and humidity. Ideal for recommending suitable crops for specific regions or climates. Click below to interact with the model and test its capabilities.";

  const modelSpecifics = [
    {
      title: "Goal",
      description: "To intelligently cluster various crops based on their specific optimal growing conditions. This enables better agricultural planning and resource allocation by identifying groups of crops that thrive under similar environmental parameters."
    },
    {
      title: "Dataset",
      description: "The model is trained on a comprehensive dataset that combines detailed crop characteristics (e.g., growth cycle, water needs, soil type preferences) with specific climate preference data (e.g., historical weather patterns associated with successful cultivation)."
    },
    {
      title: "Features",
      description: "Critical environmental factors considered for clustering include average and seasonal rainfall patterns, minimum and maximum temperature ranges, daily and seasonal humidity levels, and sunlight exposure requirements."
    },
    {
      title: "Method",
      description: "The clustering is performed using advanced unsupervised learning algorithms such as K-Means or DBSCAN. K-Means is effective for identifying distinct, spherical clusters, while DBSCAN can find arbitrarily shaped clusters and is robust to outliers, offering flexibility depending on the data distribution."
    },
    {
      title: "Use Case",
      description: "A primary application is to recommend suitable crops for specific geographic regions or emerging climate scenarios. This helps farmers make informed decisions, optimize yields, and adapt to changing environmental conditions, contributing to food security."
    }
  ];

  return (
    <main className="flex flex-col items-center min-h-screen p-4 sm:p-8 bg-background selection:bg-primary/30 selection:text-primary-foreground">
      <header className="w-full max-w-3xl my-8 sm:my-12">
        <div className="mb-6 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Button variant="outline" asChild>
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Models
                </Link>
              </Button>
            </div>
            <ThemeToggle />
        </div>
        <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold font-headline text-foreground tracking-tight">
            {modelName}
            </h1>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            {modelPageDescription}
            </p>
        </div>
      </header>

      <div className="w-full max-w-3xl px-4">
        <div className="mt-2 mb-8 text-left max-w-2xl mx-auto bg-card p-6 rounded-lg shadow animate-in fade-in-0 duration-500 delay-400">
          <h2 className="text-2xl font-semibold text-card-foreground mb-6">Model Specifics:</h2>
          <ul className="list-none space-y-4 text-muted-foreground">
            {modelSpecifics.map((item, index) => (
              <li 
                key={item.title} 
                className="flex items-start"
              >
                <strong className="font-medium text-card-foreground w-32 shrink-0">{item.title}:</strong>
                <span className="ml-2">{item.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full max-w-3xl grow flex flex-col items-center justify-center pb-8 animate-in fade-in-0 duration-500 delay-600">
        <Button size="lg" asChild className="mt-4">
          <Link href="/model-beta/interact">
            <PlayCircle className="mr-2 h-5 w-5" />
            Interact with model
          </Link>
        </Button>
      </div>
      <footer className="mt-auto pt-8 mb-8 text-center text-muted-foreground text-sm">
        <p>&copy; <CopyrightYear /> PredictEdge. All rights reserved.</p>
      </footer>
    </main>
  );
}
