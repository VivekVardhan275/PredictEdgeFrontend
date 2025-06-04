
"use client";

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, Bot } from 'lucide-react';

interface ModelLinkCardProps {
  modelName: string;
  modelDescription: string;
  href: string;
}

export function ModelLinkCard({ modelName, modelDescription, href }: ModelLinkCardProps) {
  return (
    <Link href={href} className="group block hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-xl">
      <Card className="w-full shadow-lg rounded-xl transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:border-primary/50 bg-card flex flex-col h-full group-hover:scale-[1.03]">
        <CardHeader className="pb-4">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-primary/20 rounded-lg mt-1">
              <Bot className="w-8 h-8 text-primary" />
            </div>
            <div>
              <CardTitle className="font-headline text-2xl text-card-foreground">{modelName}</CardTitle>
              <CardDescription className="text-muted-foreground mt-1 line-clamp-3">{modelDescription}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="mt-auto pt-2 pb-4">
          <div className="flex items-center justify-end text-sm font-medium text-primary group-hover:text-primary/80 transition-colors">
            Go to model
            <ChevronRight className="ml-1 h-5 w-5 transform transition-transform duration-200 group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
