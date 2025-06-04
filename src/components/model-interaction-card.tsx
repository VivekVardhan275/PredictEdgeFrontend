
"use client";

import { useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Bot, Send, Loader2, RotateCcw } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

type InputFormat = 'csv' | 'json';

interface ModelInteractionCardProps {
  modelId: string;
  modelName: string;
  modelDescription: string;
  inputPlaceholder: {
    csv: string;
    json: string;
  };
}

export function ModelInteractionCard({ modelId, modelName, modelDescription, inputPlaceholder }: ModelInteractionCardProps) {
  const [inputFormat, setInputFormat] = useState<InputFormat>('csv');
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!inputValue.trim()) {
      setError("Input cannot be empty.");
      return;
    }
    setIsLoading(true);
    setOutputValue('');
    setError(null);

    let dataToSend: any;
    let contentType: string;

    if (inputFormat === 'json') {
      try {
        dataToSend = JSON.parse(inputValue);
        contentType = 'application/json';
      } catch (parseError) {
        setError("Invalid JSON input. Please check your JSON syntax.");
        setIsLoading(false);
        return;
      }
    } else { // csv
      dataToSend = inputValue;
      contentType = 'text/csv'; // Correct content type for CSV
    }
    
    const requestHeaders = { 'Content-Type': contentType };
    
    let postUrl = '';
    let outputUrl = '';

    if (modelId === "modelAlpha") {
      postUrl = inputFormat === 'csv' 
        ? 'https://predictedge.vivek275.rocks/api/model-alpha/csv/input' 
        : 'https://predictedge.vivek275.rocks/api/model-alpha/json/input';
      outputUrl = 'https://predictedge.vivek275.rocks/api/model-alpha/output';
    } else if (modelId === "cropGroupingModel") {
      postUrl = inputFormat === 'csv'
        ? 'https://predictedge.vivek275.rocks/api/model-beta/csv/input'
        : 'https://predictedge.vivek275.rocks/api/model-beta/json/input';
      outputUrl = 'https://predictedge.vivek275.rocks/api/model-beta/output';
    } else if (modelId === "fakeAccountClassifierModel") {
      postUrl = inputFormat === 'csv'
        ? 'https://predictedge.vivek275.rocks/api/model-gamma/csv/input'
        : 'https://predictedge.vivek275.rocks/api/model-gamma/json/input';
      outputUrl = 'https://predictedge.vivek275.rocks/api/model-gamma/output';
    } else {
      setError(`Interaction logic for ${modelName} (ID: ${modelId}) is not yet implemented.`);
      setIsLoading(false);
      return;
    }

    try {
      await axios.post(
        postUrl,
        dataToSend,
        { headers: requestHeaders }
      );

      const outputResponse = await axios.get<string>(
        outputUrl,
        { headers: { 'Accept': 'text/plain, application/json' } } // Expecting string, but accept json as fallback
      );
      
      setOutputValue(outputResponse.data || 'No output received.');

    } catch (err: any) {
      console.error(`Error during ${modelName} interaction:`, err);
      let errorMessage = `An error occurred while processing your request for ${modelName}.`;
      if (axios.isAxiosError(err)) {
        if (err.response) {
          errorMessage = `Error: ${err.response.status} - ${err.response.data?.message || (typeof err.response.data === 'string' ? err.response.data : JSON.stringify(err.response.data)) || err.message}`;
        } else if (err.request) {
          errorMessage = "Error: No response received from server. Please check network connectivity.";
        } else {
          errorMessage = `Error: ${err.message}`;
        }
      } else {
        errorMessage = `Error: ${err.message || 'An unknown error occurred.'}`;
      }
      setError(errorMessage);
      setOutputValue('');
    }
    setIsLoading(false);
  };

  const handleReset = () => {
    setInputFormat('csv');
    setInputValue('');
    setOutputValue('');
    setError(null);
    setIsLoading(false);
  };

  const currentPlaceholder = inputPlaceholder[inputFormat] || "Enter your input...";

  const handleFormatChange = (value: InputFormat) => {
    setInputFormat(value);
    setInputValue(''); 
    setOutputValue('');
    setError(null);
  };

  return (
    <Card className="w-full shadow-xl rounded-xl flex flex-col bg-card h-full min-h-[540px] transition-all duration-300 ease-in-out hover:shadow-2xl">
      <CardHeader className="pb-4">
        <div className="flex items-start space-x-4">
          <div className="p-2 bg-primary/20 rounded-lg mt-1">
            <Bot className="w-6 h-6 text-primary" />
          </div>
          <div>
            <CardTitle className="font-headline text-2xl text-card-foreground">{modelName}</CardTitle>
            <CardDescription className="text-muted-foreground">{modelDescription}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 flex-grow flex flex-col">
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="space-y-3 flex flex-col flex-grow">
          <div className="space-y-2">
            <Label className="text-sm font-medium mb-1" htmlFor={`${modelId}-input-format-group`}>Input Format:</Label>
            <RadioGroup
              id={`${modelId}-input-format-group`}
              value={inputFormat}
              onValueChange={handleFormatChange}
              className="inline-flex items-center rounded-lg bg-muted p-1 gap-1"
              disabled={isLoading}
            >
              {(['csv', 'json'] as InputFormat[]).map((format) => (
                <div key={format} className="flex items-center">
                  <RadioGroupItem value={format} id={`${modelId}-format-${format}`} className="sr-only peer" />
                  <Label
                    htmlFor={`${modelId}-format-${format}`}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer text-muted-foreground hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground peer-data-[state=checked]:shadow-md"
                  >
                    {format.toUpperCase()}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <Textarea
            id={`${modelId}-input`}
            placeholder={currentPlaceholder}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="resize-none focus:ring-accent focus:border-accent text-base flex-grow"
            disabled={isLoading}
            aria-label={`Input for ${modelName}`}
          />
          <div className="flex gap-2">
            <Button type="submit" className="flex-grow bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Send className="mr-2 h-4 w-4" />
              )}
              {isLoading ? 'Processing...' : 'Submit to Model'}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={handleReset}
              className="px-4"
              disabled={isLoading}
              aria-label="Reset input and output"
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset
            </Button>
          </div>
        </form>
        {error && (
          <div className="mt-4 p-3 bg-destructive/10 border border-destructive/30 rounded-md text-destructive text-sm">
            <p>{error}</p>
          </div>
        )}
      </CardContent>
      {outputValue && !isLoading && (
        <CardFooter className="pt-4 mt-auto">
          <div className="w-full space-y-2 animate-in fade-in-0 duration-500">
            <h3 className="text-lg font-semibold font-headline text-card-foreground">Model Output:</h3>
            <div className="p-4 bg-muted/50 rounded-md border border-border min-h-[100px]">
              <pre className="text-sm whitespace-pre-wrap break-words text-foreground">{outputValue}</pre>
            </div>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
