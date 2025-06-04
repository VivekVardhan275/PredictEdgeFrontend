
import { ModelInteractionCard } from '@/components/model-interaction-card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home } from 'lucide-react';
import { CopyrightYear } from '@/components/copyright-year';
import { ThemeToggle } from '@/components/theme-toggle';

export default function ModelGammaInteractPage() {
  const modelName = "Fake vs. Real Account Classification Model";
  const cardModelDescription = "Engage with the 'Fake vs. Real Account Classification Model' by providing social media profile data. Select your desired input format (CSV or JSON) and provide the data below.";
  
  const inputPlaceholder = {
    csv: `Example CSV format (header row + data):
profile_id,num_friends,num_posts,num_likes_received,activity_rate_posts_day,has_profile_pic,has_bio,account_age_months,followers_to_following_ratio,avg_comment_length,url_contains_numbers
user123,50,10,200,0.5,1,1,3,1.2,15,0
(Provide details like profile ID, friend/post/like counts, activity rate, profile picture/bio presence, account age, follower ratio, comment length, URL numbers.)`,
    json: `Example JSON format (array of objects):
[
  {
    "profile_id": "user_abc", "num_friends": 120, "num_posts": 35, "num_likes_received": 850,
    "activity_rate_posts_day": 1.2, "has_profile_pic": true, "has_bio": true, 
    "account_age_months": 12, "followers_to_following_ratio": 1.5, 
    "avg_comment_length": 25, "url_contains_numbers": false
  }
]
(Ensure each object contains relevant key-value pairs. Booleans for has_profile_pic, has_bio, url_contains_numbers can be true/false or 1/0.)`
  };

  return (
    <main className="flex flex-col items-center min-h-screen p-4 sm:p-8 bg-background selection:bg-primary/30 selection:text-primary-foreground">
      <header className="w-full max-w-3xl my-8 sm:my-12">
        <div className="mb-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Button variant="outline" asChild>
              <Link href="/model-gamma">
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
            Interact With {modelName}
            </h1>
        </div>
      </header>

      <div className="w-full max-w-3xl grow animate-in fade-in-0 duration-500">
        <ModelInteractionCard
          modelId="fakeAccountClassifierModel"
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
