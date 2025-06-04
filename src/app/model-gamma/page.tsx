
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, PlayCircle } from 'lucide-react';
import { CopyrightYear } from '@/components/copyright-year';
import { ThemeToggle } from '@/components/theme-toggle';

export default function ModelGammaPage() {
  const modelName = "Fake vs. Real Account Classification";
  const modelPageDescription = "This model analyzes social media profile characteristics to determine the likelihood of an account being fake or genuine. Understanding these patterns helps in identifying and mitigating inauthentic behavior on social media platforms.";

  const modelSpecifics = [
    {
      title: "Goal",
      description: "Predict whether a social media profile is fake or real, aiding in the detection of inauthentic accounts and spambots."
    },
    {
      title: "Dataset",
      description: "Utilizes the 'Fake Profile Detection Dataset' from Kaggle, which contains various anonymized attributes of social media profiles labeled as fake or real."
    },
    {
      title: "Features",
      description: "Key predictive features include the number of friends/followers, number of posts, count of likes/reactions, account activity rate (e.g., posts per day), profile completion status, and age of the account."
    },
    {
      title: "Techniques",
      description: "Employs a combination of classification algorithms such as Logistic Regression for its interpretability, Random Forest for its robustness with varied features, and XGBoost for its high predictive accuracy and performance."
    },
    {
      title: "Use Case",
      description: "Primarily used for social media platform moderation to automatically flag or remove suspicious accounts, enhance user safety, and maintain platform integrity by reducing spam and misinformation."
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
          <Link href="/model-gamma/interact">
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
