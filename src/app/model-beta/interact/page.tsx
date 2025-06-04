
import { ModelInteractionCard } from '@/components/model-interaction-card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home } from 'lucide-react';
import { CopyrightYear } from '@/components/copyright-year';
import { ThemeToggle } from '@/components/theme-toggle';

export default function ModelBetaInteractPage() {
  const modelName = "Crop Grouping by Climate Requirements Model";
  const cardModelDescription = "Engage with the 'Crop Grouping by Climate Requirements Model' by providing climate data or crop characteristics. Select your desired input format (CSV or JSON) and provide your own data.";
  
  const inputPlaceholder = {
    csv: `Example CSV format (header row + data):
crop_name,avg_rainfall_mm,min_temp_c,max_temp_c,optimal_temp_c,avg_humidity_percent,soil_type,soil_ph_min,soil_ph_max,sunlight_hours_min,frost_tolerance
Wheat,750,5,25,15,60,Loam,6.0,7.0,6,Yes
(Provide details like crop name, average rainfall (mm), temperature ranges (°C), humidity (%), soil type, pH, sunlight hours, frost tolerance.)`,
    json: `Example JSON format (array of objects):
[
  {
    "crop_name": "Soybean", "avg_rainfall_mm": 700, "min_temp_c": 15, "max_temp_c": 35,
    "optimal_temp_c": 25, "avg_humidity_percent": 65, "soil_type": "Silty Clay Loam",
    "soil_ph_min": 6.0, "soil_ph_max": 7.0, "sunlight_hours_min": 7, "frost_tolerance": "No"
  }
]
(Ensure each object contains relevant key-value pairs. Numeric values should be numbers, frost_tolerance can be "Yes"/"No" or true/false.)`
  };

  return (
    <main className="flex flex-col items-center min-h-screen p-4 sm:p-8 bg-background selection:bg-primary/30 selection:text-primary-foreground">
      <header className="w-full max-w-3xl my-8 sm:my-12">
        <div className="mb-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Button variant="outline" asChild>
              <Link href="/model-beta">
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
            Interact With ML Model That Clusters Crop by Climate Requirements
            </h1>
        </div>
      </header>

      <div className="w-full max-w-3xl grow animate-in fade-in-0 duration-500">
        <ModelInteractionCard
          modelId="cropGroupingModel"
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
