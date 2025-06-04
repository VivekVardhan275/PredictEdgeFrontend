
import { ModelInteractionCard } from '@/components/model-interaction-card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home } from 'lucide-react';
import { CopyrightYear } from '@/components/copyright-year';
import { ThemeToggle } from '@/components/theme-toggle';

export default function ModelAlphaInteractPage() {
  const modelName = "Mental Health in Tech Workers Model";
  const cardModelDescription = "Engage with the 'Mental Health in Tech Workers Model' by providing relevant input below. Select your desired input format (CSV or JSON) and provide your own data.";
  
  const inputPlaceholder = {
    csv: `Example CSV format (header row + data):
Age,Gender,Country,self_employed,family_history,work_interfere,company_size,remote_work,tech_company,benefits,care_options,wellness_program,seek_help,anonymity,leave,mental_health_consequence,phys_health_consequence,coworkers,supervisor,mental_health_interview,phys_health_interview,mental_vs_physical,obs_consequence
37,Male,United States,No,No,Often,"100-500",Yes,Yes,Yes,Not sure,No,No,Yes,Somewhat easy,No,No,Some of them,Yes,No,Maybe,Yes,No
(Provide details like Age, Gender, Country, employment factors, company policies on mental health, etc.)`,
    json: `Example JSON format (array of objects):
[
  {
    "Age": 37, "Gender": "Male", "Country": "United States", "self_employed": "No", 
    "family_history": "No", "work_interfere": "Often", "company_size": "100-500",
    "remote_work": "Yes", "tech_company": "Yes", "benefits": "Yes", "care_options": "Not sure",
    "wellness_program": "No", "seek_help": "No", "anonymity": "Yes", "leave": "Somewhat easy",
    "mental_health_consequence": "No", "phys_health_consequence": "No", 
    "coworkers": "Some of them", "supervisor": "Yes", "mental_health_interview": "No",
    "phys_health_interview": "Maybe", "mental_vs_physical": "Yes", "obs_consequence": "No"
  }
]
(Ensure each object contains relevant key-value pairs as shown above. All string values must be in double quotes.)`
  };

  return (
    <main className="flex flex-col items-center min-h-screen p-4 sm:p-8 bg-background selection:bg-primary/30 selection:text-primary-foreground">
      <header className="w-full max-w-3xl my-8 sm:my-12">
        <div className="mb-6 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Button variant="outline" asChild>
                <Link href="/model-alpha">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Model Details
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Home
                </Link>
              </Button>
            </div>
            <ThemeToggle />
        </div>
        <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold font-headline text-foreground tracking-tight">
            Interact With ML Model That Predicts the Mental Health In Tech Workers
            </h1>
        </div>
      </header>

      <div className="w-full max-w-3xl grow animate-in fade-in-0 duration-500">
        <ModelInteractionCard
          modelId="modelAlpha"
          modelName={modelName}
          modelDescription={cardModelDescription}
          inputPlaceholder={inputPlaceholder}
        />
      </div>
      <footer className="mt-16 mb-8 text-center text-muted-foreground text-sm">
        <p>&copy; <CopyrightYear /> PredictEdge. All rights reserved.</p>
      </footer>
    </main>
  );
}
