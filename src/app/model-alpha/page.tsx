
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, PlayCircle } from 'lucide-react';
import { CopyrightYear } from '@/components/copyright-year';
import { ThemeToggle } from '@/components/theme-toggle';

export default function ModelAlphaPage() {
  const modelName = "Mental Health in Tech Workers";
  const modelPageDescription = "This model aims to predict whether a tech worker may be at risk of experiencing mental health issues. It analyzes various factors from their work life and personal history to provide an informed prediction. Understanding these risks can help in fostering better support systems and interventions within the tech industry.";

  const modelSpecifics = [
    {
      title: "Goal",
      description: "To proactively identify and predict the likelihood of mental health issues among individuals working in the technology sector. The aim is to foster timely and targeted support systems, promoting a healthier work environment and enabling early intervention strategies."
    },
    {
      title: "Dataset",
      description: "The model's insights are derived from the \"Mental Health in Tech Survey,\" an extensive and publicly available dataset. This survey captures a wide array of anonymized data points regarding tech professionals' work environments, personal well-being, and attitudes towards mental health."
    },
    {
      title: "Features",
      description: "Key predictive factors include the employee's work environment (e.g., company size, availability of remote work options, mental health support benefits), the degree of anonymity they feel they have when discussing mental health, their self-reported personal mental health history, and any known family history of mental health conditions."
    },
    {
      title: "Techniques",
      description: "This model utilizes a hybrid approach, combining the strengths of Naive Bayes and Logistic Regression algorithms. Naive Bayes is employed for its efficiency with categorical features, while Logistic Regression provides robust probabilistic predictions, making this combination highly effective for this type of classification task."
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
          <Link href="/model-alpha/interact">
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
